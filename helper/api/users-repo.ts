// import getConfig from "next/config";
// import { db } from "./db";

// const { serverRuntimeConfig } = getConfig();
// const User = db.User;

// export const usersRepo = {
//   getAll,
//   getById,
//   create,
// };

// async function getAll() {
//   return await User.find();
// }

// async function getById(id: any) {
//   return await User.findById(id);
// }

// async function create(params: any) {
//   console.log("here");
//   const { _id } = params;
//   console.log(_id);
//   // Check if the user already exists in the database
//   const existingUser = await User.findOne({ _id });
//   if (existingUser) {
//     // User exists, return it
//     console.log("user exist", existingUser);
//     return existingUser;
//   } else {
//     // User doesn't exist, create a new user
//     const newUser = new User(params);
//     await newUser.save();
//     return newUser;
//   }
// }
