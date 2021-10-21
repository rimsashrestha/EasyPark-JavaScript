import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    VehicleNumber: String,
    make: String,
    model: String,

})

export default mongoose.model('guestVehicleInfo', guestSchema);