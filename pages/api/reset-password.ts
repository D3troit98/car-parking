import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import User from "@/utils/models/userSchema";
import { v4 as uuidv4 } from "uuid";
import  sendPasswordResetEmail  from "@/utils/emailService";
import { genSaltSync, hashSync } from "bcrypt-ts";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;
    if(email){
    try {
      await db.connectDB();
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const resetToken = uuidv4();
      existingUser.resetToken = resetToken;
      existingUser.resetTokenExpiry = Date.now() + 3600000; // Token expires in 1 hour

      await existingUser.save();

      // Send password reset email to the user
      await sendPasswordResetEmail(existingUser.email, resetToken);

      return res.status(200).json({ message: "Password reset email sent" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
}
    
    const {token, password} =req.body
    if (token && password)
    {
        try {     
            await db.connectDB();
      
            const existingUser = await User.findOne({ resetToken: token });
      
            // Check if user exists
            if (!existingUser) {
              return res.status(400).json({ message: "Invalid reset token" });
            }
      
            // Check if reset token is expired
            if (Date.now() > existingUser.resetTokenExpiry) {
              return res.status(400).json({ message: "Reset token has expired" });
            }
      
            // Hash the new password
            const salt = genSaltSync(10);
            const hashedPassword =  hashSync(password, salt);
      
            // Update user's password
            existingUser.password = hashedPassword;
            existingUser.resetToken = null;
            existingUser.resetTokenExpiry = null;
      
            await existingUser.save();
      
            return res.status(200).json({ message: "Password reset successful" });
          } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server error" });
          }
    }
} else {
    return res.status(405).end(); // Method Not Allowed
  }
}
