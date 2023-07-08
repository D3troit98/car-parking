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


export interface IParkingHistoryData {
  _id: string;
  checkInDate: string;
  checkInTime: string;
  licensePlate: string;
  email: string;
  checkedoff: boolean;
  parkingSpot: {
    available: boolean;
    image: string;
    location: string;
    name: string;
    price: number;
    updatedAt: string;
    _id: string;
  };
  userName: string;
}


export interface PopularSpotsData {
  parkingSpots: string[];
  counts: number[];
}

interface IParkingLot {
  name: string;
  location: string;
  available: boolean;
  image: string;
  price: number;
  _id: string;
  updatedAt: string;
}

export type DashBoardPageProp = {
  hasReservation : boolean,
  parkingSpot : IParkingSpot |null,
  parkingHistoryData:IParkingHistoryData[]
}