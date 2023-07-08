import mongoose, { Model, Document } from 'mongoose';
import { IParkingSpot } from '@/types';
import ParkingSpot from './parkingSpotSchema';
interface ParkingHistoryAttributes {
  parkingSpot: any;
  checkInDate: Date;
  checkInTime: string;
  licensePlate: string;
  email: string;
  userName: string;
  checkedoff?: boolean;
  checkOutDate:Date;
  checkOutTime: string
}

interface ParkingHistoryDocument extends Document, ParkingHistoryAttributes {}

interface ParkingHistoryModel extends Model<ParkingHistoryDocument> {}

const parkingHistorySchema = new mongoose.Schema<ParkingHistoryDocument, ParkingHistoryModel>(
  {
    parkingSpot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ParkingSpot',
      required: true,
    },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: false },
    checkInTime: { type: String, required: true },
    checkOutTime:{type:String,required:false},
    licensePlate: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true },
    checkedoff: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const ParkingHistory =
  (mongoose.models.ParkingHistory as ParkingHistoryModel) ||
  mongoose.model<ParkingHistoryDocument, ParkingHistoryModel>('ParkingHistory', parkingHistorySchema);

export default ParkingHistory;
