import { Schema, model } from "mongoose";

// we don't need the rooms model cause we don't need to create any new model yet

const roomsSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    capacity: { type: Number, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    minplayers: { type: Number, required: true },

    // creationDate: {type: Date, required: true}
  },
  { collection: "rooms" }
);

const Room = model("rooms", roomsSchema);

export default Room;

// 

// _id
// 63b7ff145d924d5569855310
// name
// "Ghost Buster"
// age
// 16
// capacity
// 10
// img
// "https://thechive.com/wp-content/uploads/2021/02/ghostbuster-cartoons-t…"
// description
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, exercit…"
// price
// 99
// minplayers
// 4