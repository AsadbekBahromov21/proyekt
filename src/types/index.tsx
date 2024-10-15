export interface CounterState {
  value: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}
export interface User {
  _id: string;
  email: string;
  username: string;
  photo: string;
  fullName: string;
  followers: any;
}
export interface Profil {
  _id: string;
  email: string;
  username: string;
  photo: string;
  fullName: string;
  followers: any;
}
