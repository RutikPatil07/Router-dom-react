import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//export default function Login({ setIsLoggedIn }) {//probs
  export default function Login() {
  const [mob, setMob] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMob(e.target.value);
  };

  const handleLogin = () => {
    if (mob === "7798167403") {
      alert("Login Successful");
      // setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="number"
            className="form-control" 
            value={mob}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
