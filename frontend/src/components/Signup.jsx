import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { addUser } from "../api/tasks.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password, name); // Call context function

      if (result.success) {
        await addUser({
          name: name,
          email: email,
          role: "dolgozó",
        });
        navigate("/dashboard"); // Navigate to dashboard on success
      } else {
        setError(result.error.message); // Show error message on failure
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="container pt-5" style={{ maxWidth: "500px" }}>
        <h2 className="fw-bold mb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/">Sign in</Link>
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
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="text"
            id="text"
            placeholder="Name"
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

        <button type="submit" disabled={loading} className="btn btn-primary w-100 mt-3">
          Sign Up
        </button>

        {error && <p className="text-danger text-center pt-3">{error}</p>}
      </form>
    </div>

  );
};

export default Signup;