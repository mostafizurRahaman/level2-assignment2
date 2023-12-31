# The Necessary Instruction to Execute this application locally:

-  At first clone the code from github

```git
   git clone https://github.com/Apollo-Level2-Web-Dev/L2-B2-assignment-2.git
```

-  Then install the packages with `yarn install`
-  Run the application in development Environment with this command: `start:dev`
-  Run the application in production Environment with this command: `start:prod`
-  Build the Application with `yarn build`
-  To check linting error use this command: `yarn lint`
-  To fix linting error use this command : `yarn lint:fix`
-  To check prettier use this command `yarn prettier`
-  To check prettier use this command `yarn prettier:fix`

# Used Technologies:

-  Express
-  TypeScript
-  Mongoose
-  Cors
-  Dotenv
-  Bcrypt
-  Eslint
-  Prettier
-  Zod

# Api End points :

-  ## Create new User:

   -  method: `POST`
   -  route: `/api/users`
   -  `Request Body:`

   ```json
   {
      "userId": 4,
      "username": "roman4",
      "password": "secure_password",
      "fullName": {
         "firstName": "Roman",
         "lastName": "Hossain"
      },
      "age": 30,
      "email": "roman@example.com",
      "isActive": true,
      "hobbies": ["Reading", "Traveling"],
      "address": {
         "street": "123 Main St",
         "city": "Anytown",
         "country": "USA"
      }
   }
   ```

   -  Response :

   ```json
   {
      "success": true,
      "message": "Users fetched successfully!",
      "data": {
         "userId": 5,
         "username": "roman5",
         "fullName": {
            "firstName": "Roman",
            "lastName": "Hossain"
         },
         "age": 30,
         "email": "roman@example.com",
         "isActive": true,
         "hobbies": ["Reading", "Traveling"],
         "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "country": "USA"
         },
         "__v": 0
      }
   }
   ```

-  ## Get All Users:

   -  method: `GET`
   -  route: `/api/users`
   -  Response:

   ```json
   {
      "success": true,
      "message": "Users fetched successfully!",
      "data": [
         {
            "username": "roman1",
            "fullName": {
               "firstName": "Roman",
               "lastName": "Hossain"
            },
            "age": 30,
            "email": "roman@example.com",
            "address": {
               "street": "123 Main St",
               "city": "Anytown",
               "country": "USA"
            }
         }

         // others user data:
      ]
   }
   ```

-  ### Get Single User By `userId`:

   -  method: `GET`,
   -  route: `/api/users/:userId`,
   -  params: pass `userId` as params
   -  Response:

   ```json
   {
      "success": true,
      "message": "User fetched successfully",
      "data": {
         "userId": 2,
         "username": "roman2",
         "fullName": {
            "firstName": "Roman",
            "lastName": "Hossain"
         },
         "age": 30,
         "email": "roman@example.com",
         "isActive": true,
         "hobbies": ["Reading", "Traveling"],
         "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "country": "USA"
         }
      }
   }
   ```

-  ### Update Single User By `userId`

   -  method: `PUT`
   -  route: `/api/users/:userId/`
   -  params: pass `userId` as params
   -  Request Body:

      ```json
      {
         "userId": 4,
         "username": "roman4",
         "password": "secure_password",
         "fullName": {
            "firstName": "Roman",
            "lastName": "Hossain"
         },
         "age": 30,
         "email": "roman@example.com",
         "isActive": true,
         "hobbies": ["Reading", "Traveling"],
         "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "country": "USA"
         }
      }
      ```

   -  Response :

   ```json
   {
      "success": true,
      "message": "User updated successfully!",
      "data": {
         "userId": 4,
         "username": "roman4",
         "fullName": {
            "firstName": "Ratul",
            "lastName": "Hossain"
         },
         "age": 30,
         "email": "roman@example.com",
         "isActive": true,
         "hobbies": ["Reading", "Traveling"],
         "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "country": "USA"
         }
      }
   }
   ```

-  ### Delete User with `userId`:

   -  method: `delete`,
   -  route: `/api/users/:userId/`
   -  params: pass `userId` as params
   -  Response:

   ```json
   {
      "success": false,
      "message": "User not found",
      "error": {
         "code": 404,
         "description": "User not found!"
      }
   }
   ```

-  ### Create an order on user object By `userId`:

   -  method: `POST`,
   -  route: `/api/users/:userId/orders`
   -  params: pass `userId` as params
   -  Request:

   ```json
   {
      "productName": "Example Product",
      "price": 29.99,
      "quantity": 100
   }
   ```

   -  Response:

   ```json
   {
      "success": true,
      "message": "Order created successfully!",
      "data": null
   }
   ```

-  ### Get user all orders by `userId`:

   -  method: `GET`
   -  route: `/api/users/:userId/orders/`
   -  params: pass `userId` as params
   -  Response :

   ```json
   {
      "success": true,
      "message": "Order created successfully!",
      "data": {
         "orders": [
            {
               "productName": "Example Product",
               "price": 29.99,
               "quantity": 100
            }
         ]
      }
   }
   ```

-  ### Get User's orders totalPrice by `userId`:

   -  method: `GET`
   -  route: `/api/users/:userId/orders/`
   -  params: pass `userId` as params
   -  Response :

   ```json
   {
      "success": true,
      "message": "Total price calculated successfully!",
      "data": {
         "totalPrice": 0
      }
   }
   ```

# Finally Deployed On vercel :

-  Root URL : https://etms-server-5q5u0wdoc-mostafizurrahaman.vercel.app/

# Thank you for reading carefully.
