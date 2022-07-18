export interface Orders {
  client : string;
  dataEntry: string;
  dateProcessed: string;
  id: number;
  products: [
    qty: number,
    product: {
      dateEntry : string,
      id: number,
      image: string,
      name: string,
      price: number,
      type: string,
    }
  ];
  status: string;
  userId: number;
  // image: string;
  // name: string;
  // price: number;
  // type: string;
}
