import mongoose from "mongoose";

const ParkingHistorySchema = new mongoose.Schema({
  parkingSpot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parkingSpot",
    required: true,
  },
  checkInDate: { type: Date, required: true },
  checkInTime: { type: String, required: true },
  licensePlate: { type: String, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  checkedoff: { type: Boolean, default: false },
});

const ParkingHistory =
  mongoose.models.ParkingHistory ||
  mongoose.model("ParkingHistory", ParkingHistorySchema);

export default ParkingHistory;
