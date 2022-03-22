import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Headline from "../../components/headline/Headline";
import ThemedButton from "../../components/button/ThemedButton";
import Logo from "../../components/logo/Logo";
import TextInput from "../../components/textInput/TextInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const authInputClassName =
    error === undefined ? "auth__textBox" : "auth__textBox-error";
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo />
        <Headline message="Login as existing user:" />
        <TextInput
          inputType="text"
          className={authInputClassName}
          valueString={email}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="E-mail Address"
        />
        <TextInput
          inputType="password"
          className={authInputClassName}
          valueString={password}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Password"
        />
        <ThemedButton
          message={"Login"}
          colorTheme={"login"}
          handleClick={() => logInWithEmailAndPassword(email, password)}
        />
        <ThemedButton
          message={"Login with Google"}
          colorTheme={"secondary"}
          handleClick={signInWithGoogle}
        />
        <div className="auth__message">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div className="auth__message">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Login;
