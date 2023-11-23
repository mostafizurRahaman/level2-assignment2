import { Schema, model } from "mongoose";
import { IAddress, IFullName, IOrder, TUser } from "./users.interface";
import bcrypt from "bcrypt";
import configs from "../../configs";
const fullNameSchema = new Schema<IFullName>(
   {
      firstName: {
         type: String,
         trim: true,
         required: [true, "first name is required"],
      },
      lastName: {
         type: String,
         trim: true,
         required: [true, "last name is required"],
      },
   },
   {
      _id: false,
   }
);

const addressSchema = new Schema<IAddress>(
   {
      street: {
         type: String,
         trim: true,
         required: [true, "street is required"],
      },
      city: {
         type: String,
         trim: true,
         required: [true, "city is required"],
      },
      country: {
         type: String,
         trim: true,
         required: [true, "country is required"],
      },
   },
   {
      _id: false,
   }
);

const orderSchema = new Schema<IOrder>(
   {
      productName: {
         type: String,
         trim: true,
         required: true,
      },
      price: {
         type: Number,
         min: [0, "Min price will be  more then 0"],
         required: [true, "price is required"],
      },
      quantity: {
         type: Number,
         min: [0, "Min price will be more then 0"],
         required: [true, "quantity is required"],
      },
   },
   {
      _id: false,
   }
);

const userSchema = new Schema<TUser>({
   userId: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "userId is required"],
   },
   username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "username is required"],
   },
   password: {
      type: String,
      trim: true,
      required: [true, "password is required "],
   },
   fullName: {
      type: fullNameSchema,
      required: [true, "fullName is required"],
   },
   age: {
      type: Number,
      required: [true, "age is required"],
   },
   email: {
      type: String,
      required: [true, "email is required"],
   },
   isActive: {
      type: Boolean,
      required: [true, "isActive is required"],
   },
   hobbies: [
      {
         type: String,
         trim: true,
         required: true,
      },
   ],
   address: {
      type: addressSchema,
      required: [true, "Address is required"],
   },
   orders: [
      {
         type: orderSchema,
      },
   ],
});

// hash password :
userSchema.pre("save", async function (next) {
   this.password = bcrypt.hashSync(
      this.password,
      Number(configs.bcrypt_solts_rounds)
   );
   next();
});

// remove password with post hook:
userSchema.post("save", async function (doc, next) {
   doc.password = "";
   next();
});

const User = model<TUser>("User", userSchema);

export default User;
