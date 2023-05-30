import mongoose from "mongoose";

const ParkingSpotSchema = new mongoose.Schema(
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
  mongoose.models.ParkingSpot ||
  mongoose.model("ParkingSpot", ParkingSpotSchema);

export default ParkingSpot;
