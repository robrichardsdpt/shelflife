import { ChangeEvent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import ThemedButton from "../../components/button/ThemedButton";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Logo from "../../components/logo/Logo";
import Headline from "../../components/headline/Headline";
import TextInput from "../../components/textInput/TextInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const authInputClassName =
    error === undefined ? "auth__textBox" : "auth__textBox-error";

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="auth">
      <div className="auth__container">
        <Logo />
        <Headline message="Register a new user:" />
        <TextInput
          inputType="text"
          className={authInputClassName}
          valueString={name}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Full Name"
        />
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
          colorTheme={"primary"}
          handleClick={register}
          message={"Register"}
        />
        <ThemedButton
          colorTheme={"secondary"}
          message={"Register with Google"}
          handleClick={signInWithGoogle}
        />
        <div className="auth__message">
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Register;
