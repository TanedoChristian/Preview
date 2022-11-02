import { db } from "../../db";

export const productModel = {
    fetchAllProduct: async () => {
        const result = await db.table('products')
        return result;
    },

    postProduct: async (product: any) => {
        const result = await db.table('products').insert(product)
        return result
    },

    fetchProductById: async (id: any) => {
        const result = await db.table('products').filter({
            id: id
        })
        return result
    },
    
    deleteAllProduct: async() => {
        const result = await db("crud").table("products").delete().run()
        return result
    },

    deleteProductById: async(id: any) => {
        const result = await db.table('products').filter({
            id: id
        }).delete()
        return result
    },

    updateProduct: async(data: any) => {
        const result = await db.table('products').filter({
            id: data.id
        }).update({name: data.name, unit_price: data.unit_price, quantity: data.quantity})
        return result 
    },

    updateProductById: async(data: any, id: any) => {
        const result = await db.table('products').filter({
            id: id
        }).update({name: data.name, unit_price: data.unit_price, quantity: data.quantity})

        return result
    }
}