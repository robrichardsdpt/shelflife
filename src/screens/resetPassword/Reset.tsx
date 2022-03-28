import { ChangeEvent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemedButton from "../../components/button/ThemedButton";
import { auth, sendPasswordReset } from "../../firebase";
import Logo from "../../components/logo/Logo";
import Headline from "../../components/headline/Headline";
import TextInput from "../../components/textInput/TextInput";
import Loading from "../loading/Loading";

const Reset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const authInputClassName =
    error === undefined ? "auth__textBox" : "auth__textBox-error";

  useEffect(() => {
    if (loading) return setIsLoading(true);
    if (user) navigate("/dashboard");
    if (!loading) return setIsLoading(false);
  }, [user, loading, navigate]);

  return !isLoading ? (
    <div className="auth">
      <div className="auth__container">
        <Logo />
        <Headline message="Reset your password:" />
        <TextInput
          inputType="text"
          className={authInputClassName}
          valueString={email}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="E-mail Address"
        />
        <ThemedButton
          colorTheme={"primary"}
          handleClick={() => sendPasswordReset(email)}
          message={"Send password reset email"}
        />
        <div className="auth__message">
          Don't have an account?{" "}
          <Link className="auth__link" to="/register">
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Reset;
