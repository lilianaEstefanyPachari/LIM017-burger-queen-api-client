export interface Product {
  dateEntry? : string;
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
  quantity?:number;
  total?: number
}

export interface ProductCart {
  dateEntry? : string;
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
  quantity:number;
  total: number
}

