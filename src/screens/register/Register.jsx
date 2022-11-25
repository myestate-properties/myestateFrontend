import { memo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

// RegisterScreen.js
import { useForm } from "react-hook-form";
import { createUser } from "../../data/api/usersApi/userApi";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
    },
  });

  const submitForm = async data => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase();
    const createUserResponse = createUser(data);
    if ((await createUserResponse).status !== 201) {
      alert("Unsuccessful!...Something went wrong")
      return;
    }
    console.log(createUserResponse);
    navigate("../login");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <h2>Cant wait to buy / rent your new home or space, register here</h2>
      {/* render error message with Error component, if any */}
      {/* {error && <Error>{error}</Error>} */}
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-input"
          {...register("firstName", { required: true, pattern: /^[a-zA-Z]+$/ })}
          // required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-input"
          {...register("lastName")}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-input"
          {...register("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          {...register("password")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          className="form-input"
          {...register("confirmPassword")}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="text"
          className="form-input"
          {...register("mobile")}
          required
        />
      </div>

      <h6>
        Gotten your login details, here to{" "}
        <Link to={navigate("/login")}>log in</Link>
      </h6>
      <button type="submit" className="button" disabled={null}>
        Register
      </button>
    </form>
  );
};

export default memo(Register);
