import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo"> Place Holder </p>
        <p>
          Welcome! To this little spit of land in the internet ocean. Before
          proceeding it is absolutely important that you login with your
          account. Don't worry, your privacy is <b>VERY</b> important to{" "}
          <s>us</s> me!
        </p>
        <Link to="pages/Login">
          <Button variant="contained">Login</Button>
        </Link>
      </header>
    </div>
  );
}

export default Login;
