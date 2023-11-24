import z from "zod";

const fullNameValidationSchema = z.object({
   firstName: z.string().trim(),
   lastName: z.string().trim(),
});

const addressValidationSchema = z.object({
   street: z.string().trim(),
   city: z.string().trim(),
   country: z.string().trim(),
});

export const orderValidationSchema = z.object({
   productName: z.string().trim(),
   price: z.number().min(0),
   quantity: z.number().min(0),
});

const userValidationSchema = z.object({
   userId: z.number().min(1),
   username: z.string().trim(),
   password: z.string().trim(),
   fullName: fullNameValidationSchema,
   age: z.number(),
   email: z.string().email().email(),
   isActive: z.boolean(),
   hobbies: z.array(z.string().trim()),
   address: addressValidationSchema,
   orders: z.array(orderValidationSchema).optional(),
   isDeleted: z.boolean().default(false).optional(),
});

export default userValidationSchema;
