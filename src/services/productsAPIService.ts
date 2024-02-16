import * as request from '../utils/configAPI' ; 

export const getProductsAPI = async ()=>{
    try {
        const response = await  request.getAPI("products") ; 
        return response ; 
    } catch (error) {
        throw error ; 
    }
}

