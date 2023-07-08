import nodemailer from "nodemailer";
import { BASE_URL } from ".";

const sendPasswordResetEmail = async (email:any, resetToken:any) => {
  // Create a Nodemailer transporter
  // Generate SMTP service account from ethereal.email
 
  
      // Create a SMTP transporter object
      let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
              user: "rebeka.wyman@ethereal.email",
              pass: "NdV363AtWHZXY39zkr"
          }
      });
   // Message object
   let message = {
    from: `rebeka.wyman@ethereal.email`,
    to: "rebeka.wyman@ethereal.email",
    subject: "Password Reset Request",
    text: 'Hello to myself!',
    html:`
    <p>Hello,</p>
    <p>You have requested to reset your password. Please click the link below to reset your password:</p>
    <a href="${BASE_URL}/reset-password/${resetToken}">Reset Password</a>
    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
  `,
};


  // Send the email
  transporter.sendMail(message, (err, info) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
        return process.exit(1);
    }

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});



};

export default sendPasswordResetEmail;
