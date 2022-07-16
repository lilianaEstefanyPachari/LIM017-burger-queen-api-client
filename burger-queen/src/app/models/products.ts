export interface Product {
  dateEntry? : string;
  id: number;
  image: string;
  name: string;
  price: number;
  type: string;
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

