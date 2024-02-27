interface ISize {
    size:string ; 
    quantity:number

}

interface IRating {
    rate:number ; 
    count:number ; 
}


export interface IProduct {
    id:string ; 
    name:string ; 
    images:string [] ; 
    description:string ; 
    price:number ; 
    categoryName:string ; 
    sizeProduct: ISize [] ;
    brand:string ; 
    color: string [] ; 
    discount:number ; 
    rating: IRating ;
    state:string [] ; 
    buy:number ; 
}

export interface IListProduct {
    listProduct:IProduct[] ; 
}



