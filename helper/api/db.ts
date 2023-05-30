// import getConfig from "next/config";
// import mongoose from "mongoose";

// const { serverRuntimeConfig } = getConfig();
// const Schema = mongoose.Schema;

// mongoose.connect(
//   process.env.MONGODB_URI || serverRuntimeConfig.connectionString
// );
// mongoose.Promise = global.Promise;

// export const db = {
//   User: userModel(),
// };

// // mongoose models with schema definitions

// function userModel() {
//   const schema = new Schema(
//     {
//       image: { type: String, required: true },
//       userName: { type: String, required: true },
//       _id: { type: String, required: true },
//       _type: { type: String, required: true },
//     },
//     {
//       // add createdAt and updatedAt timestamps
//       timestamps: true,
//     }
//   );

//   schema.set("toJSON", {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//       delete ret._id;
//       delete ret.hash;
//     },
//   });

//   return mongoose.models.User || mongoose.model("User", schema);
// }
