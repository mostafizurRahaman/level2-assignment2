import { TUser } from "./users.interface";
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

const deleteUserByIdFromDB = async (userId: string) => {
   const result = await User.updateOne(
      { userId },
      { $set: { isDeleted: true } }
   );
   return result;
};

export const UserServices = {
   createUserIntoDB,
   getUsersFromDB,
   getSingleUserByIdFromDB,
   deleteUserByIdFromDB,
};
