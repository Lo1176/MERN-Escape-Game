import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthdate: { type: Date, required: true },
    creationDate: { type: Date, required: true },
  },
  { collection: "users" }
);

const User = model('User', userSchema);


export default User
