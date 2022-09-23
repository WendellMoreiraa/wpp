import "./Login.css";
import Api from "../api";

const Login = ({ onReceive }) => {
  const handleLoginFacebook = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Error");
    }
  };
  return (
    <div className="login">
      <button onClick={handleLoginFacebook}>Logar com facebook</button>
    </div>
  );
};

export default Login;
