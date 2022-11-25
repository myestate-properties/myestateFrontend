import React, { memo } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "./login.css";


import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const navigate = useNavigate();
  const submit = (data) => {
    if (localStorage.getItem("status")) {
    navigate("../dashboard");
    }
  }

  return (
    <div>
      <form id="form" onSubmit={handleSubmit(submit)}>
        <h2>
          Welcome to <em>Myestate</em> Login Page
        </h2>
        <h6>Take the first step to your dream home</h6>
        <div className="user__icon-container">
          <AiOutlineUser className="user-icon" />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <AiOutlineMail className="form-icon" />
          <input
            type="email"
            className="form-input"
            placeholder="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <RiLockPasswordLine className="form-icon" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            {...register("password", { required: true, minLength: 8 })}
            required
          />
        </div>
        <div className="register">
          <p>
            Dont have an account, click to{" "}
            <Link to={navigate("/register")}>
              <em>register</em>
            </Link>{" "}
            for an account.
          </p>
          <p>
            By clicking the <em>login button</em>, you agree to the terms and
            condition for using this platform.
          </p>
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default memo(Login);
