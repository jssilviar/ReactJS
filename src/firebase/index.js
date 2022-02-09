import { firestore } from 'firebase';
import {getFirestore} from './connector'

function documentToProduct(document) {
    return {
        id: document.id,
        ...document.data(),
    }
}

export async function getAllProducts() {
    const db = getFirestore();
    const snapshot = await db.collection('ladydicakes').get();
    const products = snapshot.docs.map(documentToProduct);
    return products;
}

export async function getProductById(id){
    const db = getFirestore();
    const doc = await db.collection('ladydicakes').doc(id).get();

    if (!doc.exists){
        return null
    }
    return documentToProduct(doc)
}

export async function getProductByCategoria(categoria){
    const db = getFirestore();
    const snapshot = await db
        .collection('ladydicakes')
        .where('categoria' , '==' , categoria)
        .get()
    
    const products = snapshot.docs.map(documentToProduct)
    
    return products;
}

export async function createOrder(order) {
    const db = getFirestore();

    const carritoItemsIds = order.items.map( item => item.id );

    const snapshot = await db.collection('ladydicakes')
                                .where(firestore.FieldPath.documentId(), 'in', carritoItemsIds)
                                .get();

    const batch = db.batch();

    const productsOutOfStock = [];

    snapshot.docs.forEach( (doc, i) => {
        const stock = doc.data().stock;
        const quantity = order.items[i].count;

        if (stock >= quantity) {
            batch.update(doc.ref, { stock: stock - quantity})
        } else {
            const product = documentToProduct(doc);
            productsOutOfStock.push(product);
        }
    })

    if (productsOutOfStock.length !== 0) {
        throw Error('No hay stock suficiente');
    }

    await batch.commit();

    const data = {
        buyer: order.buyer,
        items: order.items,
        createdAt: firestore.Timestamp.fromDate(new Date()),
        total: order.total,
    }

    const newOrder = await db.collection('orders').add(data);

    return newOrder.id
}