import { TUser } from "./users.interface";
import User from "./users.model";

const createUserIntoDB = async (userData: TUser) => {
   const user = await User.create(userData);
   return user;
};

export const UserServices = {
   createUserIntoDB,
};
