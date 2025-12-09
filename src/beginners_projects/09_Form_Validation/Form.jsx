import { useState } from "react";
import "../09_Form_Validation/style.css";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (userName.length < 3) {
      setErrorUserName("User Name must be at least 3 characters long");
      setUserColor("red");
    } else {
      setErrorUserName("");
      setUserColor("green");
    }

    if (!email.includes("@")) {
      setErrorEmail("Please enter a valid email");
      setEmailColor("red");
    } else {
      setErrorEmail("");
      setEmailColor("green");
    }

    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters long");
      setPasswordColor("red");
    } else {
      setErrorPassword("");
      setPasswordColor("green");
    }

    if (confirmPassword !== password || confirmPassword === "") {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("red");
    } else {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <p className="error">{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
