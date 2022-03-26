import { useEffect, useState } from "react";
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

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading, navigate]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Logo />
        <LoggedInAs email={user.email} name={name} />
        <ThemedButton
          colorTheme={"primary"}
          handleClick={logout}
          message={"Logout"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
