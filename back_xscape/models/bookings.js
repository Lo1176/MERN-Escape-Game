import { Schema, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    roomId : {type : Object, required : true},
    calendar : {type : Object, required : true}
  },
  { collection: "bookings" }
);

const Booking = model('Booking', bookingSchema);

export default Booking