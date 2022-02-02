import {getFirestore} from './connector'

function documentToProduct(document) {
    return {
        id: document.id,
        ...document.data(),
    }
}

export async function getAllProducts() {
    const db = getFirestore();
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map(documentToProduct);
    return products;
}