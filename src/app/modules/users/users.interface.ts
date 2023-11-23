export interface IFullName {
   firstName: string;
   lastName: string;
}

export interface IAddress {
   street: string;
   city: string;
   country: string;
}

export interface IOrder {
   productName: string;
   price: number;
   quantity: number;
}
export type TUser = {
   userId: string;
   username: string;
   password: string;
   fullName: IFullName;
   age: number;
   email: string;
   isActive: boolean;
   hobbies: string[];
   address: IAddress;
   orders: IOrder[];
};
