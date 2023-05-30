import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import User from "@/utils/models/userSchema";

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY || "",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);

  // await usersRepo.create(res);
  const { _id } = res;
  // Connect database
  await db.connectDB();

  const existingUser = await User.findOne({ _id });
  console.log("gotten here");
  if (existingUser) {
    console.log("user exist", existingUser);
  } else {
    const newUser = new User(res);
    await newUser.save();
  }

  return NextResponse.json({ res });
}