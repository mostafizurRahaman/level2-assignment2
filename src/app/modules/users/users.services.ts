import { IOrder, TUser } from "./users.interface";
import User from "./users.model";

const createUserIntoDB = async (userData: TUser) => {
   const user = await User.create(userData);
   return user;
};

const getUsersFromDB = async () => {
   const users = await User.aggregate([
      { $match: {} },
      {
         $project: {
            username: 1,
            fullName: 1,
            age: 1,
            email: 1,
            address: 1,
            _id: 0,
         },
      },
   ]);

   return users;
};

const getSingleUserByIdFromDB = async (userId: string) => {
   // use an static method:
   const user = await User.isUserExists(userId);

   return user;
};

const updateUserByIdIntoDB = async (userId: string, userData: TUser) => {
   const result = await User.updateOne(
      { userId },
      { $set: userData },
      {
         runValidators: true,
      }
   );

   return result;
};

const deleteUserByIdFromDB = async (userId: string) => {
   const result = await User.updateOne(
      { userId },
      { $set: { isDeleted: true } }
   );
   return result;
};

// place order services:
const createAnOrderByUserIdIntoDB = async (userId: string, order: IOrder) => {
   const result = await User.updateOne(
      { userId },
      { $push: { orders: order } },
      {
         runValidators: true,
      }
   );

   return result;
};

// get orders by UserID:
const getOrdersByIdFromDB = async (userId: string) => {
   const result = await User.aggregate([
      { $match: { userId } },
      { $project: { orders: 1, _id: 0 } },
   ]);

   return result;
};

//  get TotalOrderPrice By userId:
const getTotalPriceByIdFromDB = async (userId: string) => {
   const result = await User.aggregate([
      { $match: { userId } },
      { $unwind: "$orders" },
      {
         $group: {
            _id: null,
            totalPrice: {
               $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
            },
         },
      },
      {
         $project: { totalPrice: 1, _id: 0 },
      },
   ]);

   return result;
};

export const UserServices = {
   createUserIntoDB,
   getUsersFromDB,
   getSingleUserByIdFromDB,
   deleteUserByIdFromDB,
   updateUserByIdIntoDB,
   createAnOrderByUserIdIntoDB,
   getOrdersByIdFromDB,
   getTotalPriceByIdFromDB,
};
