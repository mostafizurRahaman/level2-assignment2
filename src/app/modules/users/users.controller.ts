import { Request, Response } from "express";
import userValidationSchema from "./users.zodValidation";
import { UserServices } from "./users.services";

// create user:

const createUser = async (req: Request, res: Response) => {
   try {
      const { user: userData } = req.body;
      const validateUser = userValidationSchema.parse(userData);

      // post the validateUser data:
      const user = await UserServices.createUserIntoDB(validateUser);

      const { password, ...others } = user.toObject();
      console.log(password);

      res.status(200).json({
         success: true,
         message: "Users fetched successfully!",
         data: others,
      });
   } catch (err: unknown) {
      res.status(500).send({
         success: false,
         message: "User didn't created successfully",
         error: err,
      });
   }
};

// get all user:
const getAllUsers = async (req: Request, res: Response) => {
   try {
      const users = await UserServices.getUsersFromDB();

      res.status(200).send({
         success: true,
         message: "Users fetched successfully!",
         data: users,
      });
   } catch (err: unknown) {
      res.status(500).send({
         success: false,
         message: "User didn't fetched",
         error: err,
      });
   }
};

// retrieve single user by userId:
const getSingleUser = async (req: Request, res: Response) => {
   try {
      const { userId } = req.params;
      console.log(userId);

      if (!userId) {
         return res.status(200).send({
            success: false,
            message: "Please provide an userId",
            error: {
               code: 404,
               message: "Please provide an userId",
            },
         });
      }

      const user = await UserServices.getSingleUserByIdFromDB(userId);

      if (!user) {
         return res.status(404).json({
            success: false,
            message: "User not found",
            error: {
               code: 404,
               message: "User not found",
            },
         });
      }

      res.status(200).json({
         success: false,
         message: "User fetched successfully",
         data: user,
      });
   } catch (err: any) {
      res.status(500).send({
         success: false,
         message: err.message,
         error: err,
      });
   }
};

// deleteUserById:

const deleteUserById = async (req: Request, res: Response) => {
   try {
      const { userId } = req.params;

      const user = await UserServices.getSingleUserByIdFromDB(userId);

      if (!user) {
         return res.status(404).json({
            success: false,
            message: "User not found",
            error: {
               code: 404,
               message: "User not found",
            },
         });
      }

      const result = await UserServices.deleteUserByIdFromDB(userId);

      if (!result.modifiedCount) {
         return res.status(400).send({
            success: true,
            message: "User didn't deleted successfully!",
            data: result,
         });
      }

      res.status(200).send({
         success: true,
         message: "User deleted successfully!",
         data: result,
      });
   } catch (err: any) {
      res.status(500).send({
         success: false,
         message: err.message,
         error: err,
      });
   }
};

export const UserController = {
   createUser,
   getAllUsers,
   getSingleUser,
   deleteUserById,
};
