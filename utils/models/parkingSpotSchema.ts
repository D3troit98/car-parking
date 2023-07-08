import mongoose, { Model, Document } from 'mongoose';

interface ParkingSpotAttributes {
  name: string;
  available: boolean;
  image: string;
  location: string;
  price: number;
}

interface ParkingSpotDocument extends Document, ParkingSpotAttributes {}

interface ParkingSpotModel extends Model<ParkingSpotDocument> {}

const parkingSpotSchema = new mongoose.Schema<ParkingSpotDocument, ParkingSpotModel>(
  {
    name: { type: String, required: true },
    available: { type: Boolean, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ParkingSpot =
  (mongoose.models.ParkingSpot as ParkingSpotModel) ||
  mongoose.model<ParkingSpotDocument, ParkingSpotModel>('ParkingSpot', parkingSpotSchema);

export default ParkingSpot;
