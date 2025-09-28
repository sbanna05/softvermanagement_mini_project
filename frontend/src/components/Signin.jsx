import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { session, error } = await signInUser(email, password); // Use your signIn function

    if (error) {
      setError(error); // Set the error message if sign-in fails

      // Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
      setTimeout(() => {
        setError("");
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      // Redirect or perform any necessary actions after successful sign-in
      navigate("/dashboard");
    }

    if (session) {
      closeModal();
      setError(""); // Reset the error when there's a session
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn} className="container pt-5" style={{ maxWidth: "500px" }}>
        <h2 className="fw-bold mb-2">Sign in</h2>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>

        <div className="mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Sign In
        </button>

        {error && <p className="text-danger text-center pt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;