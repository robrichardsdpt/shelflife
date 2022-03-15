import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemedButton from "../../components/button/ThemedButton";
import { auth, sendPasswordReset } from "../../firebase";
import Logo from "../../components/logo/Logo";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo />
        <h2 className="auth__header">Reset your password:</h2>
        <input
          type="text"
          className="auth__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <ThemedButton
          colorTheme={"primary"}
          handleClick={() => sendPasswordReset(email)}
          message={"Send password reset email"}
        />
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
