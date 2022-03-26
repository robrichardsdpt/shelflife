import { useEffect, useState, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import ThemedButton from "../../components/button/ThemedButton";
import Logo from "../../components/logo/Logo";
import LoggedInAs from "../../components/loggedInAs/LoggedInAs";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user?.uid]);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/loggedOut");

    fetchUserName();
  }, [user, loading, navigate, fetchUserName]);

  if (error) console.error(error);
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Logo />
        <LoggedInAs email={user.email} name={name} />
        <ThemedButton
          colorTheme={"primary"}
          handleClick={() => {
            logout();
            return navigate("/loggedOut");
          }}
          message={"Logout"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
