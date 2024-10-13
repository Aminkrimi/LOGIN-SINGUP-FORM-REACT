import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { validate } from "../Validate/Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Toasr/Tostify";
import { Link } from "react-router-dom";

const Singup = () => {
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({
    checkbox: false,
  });

  const tochedHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  useEffect(() => {
    setError(validate(data, "Login"));
  }, [data]);

  const handeler = (event) => {
    const eventName = event.target.name;
    const value = event.target.value;
    setData({ ...data, [eventName]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      notify("Successfully Submit", "success");
    } else {
      setTouched({
        Email: true,
        Password: true,
      });
      notify("Something  wrong", "error");
    }
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <Input
          name="Email"
          type="text"
          value={data.Email}
          change={handeler}
          onfucos={tochedHandler}
          fucosed={touched.Email}
          error={error.Email}
        />
        <Input
          name="Password"
          type="text"
          value={data.Password}
          error={error.Password}
          change={handeler}
          onfucos={tochedHandler}
          fucosed={touched.Password}
        />
        <div className="input-box button">
          <Input type="Submit" value="Register" click={submitHandler} />
        </div>
        <div className="text">
          <h3>
            Already have an account? <Link to="/Signup">ُSingup now</Link>
          </h3>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Singup;
