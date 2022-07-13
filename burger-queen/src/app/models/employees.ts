export interface Users {
  id: number;
  email: string;
  password?: string;
  roles: {
    admin: boolean;
    mesero: boolean;
    cocina: boolean
  }
}
