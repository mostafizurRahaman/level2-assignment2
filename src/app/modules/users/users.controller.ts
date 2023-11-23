import { Request, Response } from "express";
import userValidationSchema from "./users.zodValidation";
import { UserServices } from "./users.services";

const createUser = async (req: Request, res: Response) => {
   try {
      const { user: userData } = req.body;
      const validateUser = userValidationSchema.parse(userData);

      // post the validateUser data:
      const user = await UserServices.createUserIntoDB(validateUser);

      const { password, ...others } = user.toObject();

      res.status(200).json({
         success: true,
         message: "Users fetched successfully!",
         data: others,
      });
   } catch (err: any) {
      res.status(500).send({
         success: false,
         message: "User didn't created successfully",
         error: err,
      });
   }
};

export const UserController = {
   createUser,
};
