import login from "./assets/login1.png";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-md-5 my-auto">
          <img
            className="img-fluid w-100 d-none d-sm-block"
            src={login}
            alt="Sign up logo"
          />
        </div>
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default App;
