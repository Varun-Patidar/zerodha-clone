import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://zerodha-backend-9xt3.onrender.com/auth/signup",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-logo">
          <h1>zerodha</h1>
        </div>

        <div className="auth-card">

          <h2>Create your account</h2>

          <p className="auth-subtitle">
            Open your Zerodha account
          </p>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Username</label>

              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>

          </form>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;