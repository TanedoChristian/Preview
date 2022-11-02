
import e, { Request, Response } from "express";
import { productModel } from "../models/productmodel";

    const sortProductsByDate = (data: any []) => {
        const sortedProducts = data.sort((a,b) => Date.parse(b.created_date) - Date.parse(a.created_date))

        return sortedProducts
    }


    const fetchAllProduct = async(req: Request, res: Response) => {
        try {
            const product : any [] = await productModel.fetchAllProduct();

            
            const data : any [] = product.filter(item => item.quantity > 0)
            const toShow : any [] = sortProductsByDate(data)


            res.status(200).json({
                products: toShow
            })

        } catch(err) {
            res.status(404).json({
                error: err
            })
        }   
    }

    const fetchProductById = async(req: Request, res: Response) => {
        const id = req.params.id
        try {
            const product : any []  = await productModel.fetchProductById(id)

            if(product.length > 0){
                res.status(200).json({
                    product: product
                })
            } else {
                res.status(404).json({
                    error: "Product not found"
                })
            }
        } catch(err) {
            res.status(404).json({
                error: err
            })
        }
        
    }


    const postProduct = async(req: Request, res: Response) => {

        try {

            const data : any [] = req.body
            const prevData : any [] = await productModel.fetchAllProduct()
    
            const newData = data.filter(({id:id1}) => !prevData.some(({id: id2}) => id2 === id1))

            //check duplicate 
            const matched_id = data.filter(({ id: id1 }) => prevData.some(({ id: id2 }) => id2 === id1));
            

            const toSaved = newData.map(item => ({...item, created_date: new Date()}))
    
    
            const result = await productModel.postProduct(toSaved)
            res.status(200).json({
                inserted: newData,
                error_duplicate: matched_id
            })
        } catch(err) {
            res.status(404).json({
                error: "No request data found"
            })
        }
    }

    const deleteAllProduct = async(req: Request, res: Response) => {
        try {

            const result = await productModel.deleteAllProduct()
            res.status(200).json({
                message: "Successfully deleted product"
            })

        } catch(err) {
            res.status(404).json({
                eror: err
            })
        }
    }

    const deleteProductById = async(req: Request, res: Response) => {
        
        try {

            const id = req.params.id
            const result = await productModel.deleteProductById(id)


            if(result.deleted > 0){
                res.status(200).json({
                    message: `Sucessfully deleted product: ${id}`
                })
            } else {
                res.status(404).json({
                    error: "Not found"
                })
            }
        } catch(err) {
            res.status(404).json({
                error: err
            })
        }
    }

    const updateProductById = async(req: Request, res: Response) => {
        const data = req.body
        const id = req.params.id
        
        try {

            const result = await productModel.updateProductById(data, id)
            const prevData : any [] = await productModel.fetchAllProduct()

            const toShow = prevData.find(item => item.id == id)


            if(toShow){
                
                res.status(200).json({
                    updated: toShow
                })
            } 

            else {
                res.status(404).json({
                    error: "Product not found"
                })
            }
                
        } catch (err) {
            res.status(404).json({
                error: err
            })
        }

        

        

    }


    const updateProduct = async(req: Request, res: Response) => {
        const data = req.body

        try {
            if(Object.entries(data).length <= 0 || !data.hasOwnProperty('id')) {
                res.status(404).json({
                    error: "No request found"
                })
                return 
            }
            const result = await productModel.updateProduct(data)
            if(result.replaced > 0 ||  result.unchanged > 0){

                res.status(200).json({
                    updated: data
                })
            } 
            else {
                res.status(404).json({
                    error: "Product not found"
                })
            }
        } catch (err) {
            res.status(404).json({
                error: err
            })
        }
    }




module.exports = {
    postProduct,
    fetchAllProduct,
    fetchProductById,
    deleteAllProduct,
    deleteProductById,
    updateProduct,
    updateProductById
}