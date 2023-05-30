export interface IParkingSpot {
  _id: string;
  name: string;
  available: boolean;
  image: string;
  location: string;
  price: number;
}

export interface IUser {
  _id: string;
  image: string;
  userName: string;
  email: string;
  _type: string;
  createdAt: number;
  updatedAt: number;
}
