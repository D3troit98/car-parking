// reset-password/[token].js

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<null |string>(null);
  const router = useRouter();
  const { token } = router.query;

  const handleResetPassword = async (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/reset-password", {
        token,
        password,
      });

      if (response.status === 200) {
        // Password reset successful, redirect to login page or display success message
        router.push("/login");
      } else {
        setError("Error resetting password");
      }
    } catch (error) {
      setError("Error resetting password");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        {/* Render password and confirm password fields */}
        {/* Handle error messages */}
        {/* Submit button */}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
