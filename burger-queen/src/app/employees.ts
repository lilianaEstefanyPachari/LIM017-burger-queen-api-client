export interface Users {
  id?: number;
  email: string;
  password: string;
  roles: {
    admin: boolean;
  }
}

// export interface Products {
//   // id?: number;
//   name: string;
//   price: number;
//   password: string;
//   roles: {
//     admin: boolean;
//   }
// }
