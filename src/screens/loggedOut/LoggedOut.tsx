import { useNavigate } from "react-router-dom";
import "./LoggedOut.scss";
import ThemedButton from "../../components/button/ThemedButton";
import Logo from "../../components/logo/Logo";
const LoggedOut = () => {
  const navigate = useNavigate();

  return (
    <div className="logged-out">
      <div className="logged-out__container">
        <Logo />
        <span className={"logged-out__message"}>
          You have been logged out! 👋
        </span>
        <ThemedButton
          colorTheme={"primary"}
          handleClick={() => {
            return navigate("/");
          }}
          message={"Return to sign in"}
        />
      </div>
    </div>
  );
};

export default LoggedOut;
