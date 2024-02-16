interface ISize {
    size:string ; 
    quantity:number

}

interface IRating {
    rate:number ; 
    count:number ; 
}


export interface IProduct {
    productId:string ; 
    name:string ; 
    image:string [] ; 
    description:string ; 
    price:number ; 
    category:string ; 
    sizeProduct: ISize [] ;
    brand:string ; 
    color: string [] ; 
    discount:number ; 
    rating: IRating ;
}



