import React, { useEffect, useState } from "react";
import "./login.css";
import Input from "../Input/Input";
import { validate } from "../Validate/Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Toasr/Tostify";
import { Link } from "react-router-dom";

const Singup = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    AcceptTerms: false,
    Success: "",
  });
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({
    checkbox: false,
  });

  const tochedHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  useEffect(() => {
    setError(validate(data, "Singup"));
    // console.log(error)
  }, [data]);

  const handeler = (event) => {
    if (event.target.type === "checkbox") {
      const checked = event.target.checked;
      setData({ ...data, AcceptTerms: checked });
      setTouched({ ...touched, checkbox: true });
    } else {
      const eventName = event.target.name;
      const value = event.target.value;
      setData({ ...data, [eventName]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      notify("Successfully Submit", "success");
      console.log("EveryThing Is Ok");
    } else {
      setTouched({
        Name: true,
        Email: true,
        Password: true,
        ConfirmPassword: true,
        checkbox: true,
      });
      notify("Something  wrong", "error");
    }
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <Input
          name="Name"
          type="text"
          value={data.Name}
          change={handeler}
          onfucos={tochedHandler}
          fucosed={touched.Name}
          error={error.Name}
        />
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

        <Input
          name="ConfirmPassword"
          type="text"
          value={data.ConfirmPassword}
          error={error.ConfirmPassword}
          change={handeler}
          onfucos={tochedHandler}
          fucosed={touched.ConfirmPassword}
        />
        <Input
          name="I accept all terms & condition"
          type="checkbox"
          change={handeler}
          error={error.AcceptTerms}
          onfucos={tochedHandler}
          fucosed={touched.checkbox}
        />
        <div className="input-box button">
          <Input type="Submit" value="Register" click={submitHandler} />
        </div>
        <div className="text">
          <h3>
            Already have an account?
            <Link to="/Login">Login</Link>
          </h3>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Singup;
