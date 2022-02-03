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