import "./Register.css";
import { auth } from "../../utils/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clear previous errors
    setErrors({ email: "", password: "" });

    let isValid = true;

    // Validate email
    if (!user.email || !/\S+@\S+\.\S+/.test(user.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      isValid = false;
    }

    // Validate password
    if (!user.password || user.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long",
      }));
      isValid = false;
    }

    if (isValid) {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => alert(error.message))
        .finally(() => setIsSubmitting(false));
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="log-in-header">
          <a href="/home">
            <img src="images/Logo.svg" />
          </a>
          <h2>Sign Up</h2>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) =>
              setUser((state) => ({ ...state, email: e.target.value }))
            }
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) =>
              setUser((state) => ({ ...state, password: e.target.value }))
            }
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <button className="btn-register" type="submit">
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
