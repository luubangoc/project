interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
    id:string ; 
    name:string ; 
    images:string [] ; 
    description:string ; 
    price:number ; 
    categoryName:string ; 
    sizeProduct: string [] ;
    brand:string ; 
    color: string [] ; 
    discount:number ; 
    rating: IRating ;
    state:string [] ; 
    buy:number ; 
    quantityProduct:number;

}

export interface IListProduct {
  listProduct: IProduct[];
}

// category
export interface ICategory {
  id: string;
  name: string;
  image: string;
}
export interface IListCategory {
  categories: ICategory[];
}

// cart
export interface IItemCart {
  product: IProduct;
  quantity: number;
}

export interface IProductCart {
  id: string;
  size: string;
  color: string;
  quantity: number;
}

export interface IItemCart {
  id: string;
  size: string;
  color: string;
}
