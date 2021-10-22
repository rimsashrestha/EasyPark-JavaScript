import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import * as Yup from "yup";

const SignUp = () => {
  const history = useHistory();
  const paperStyle = {
    padding: "30px 20px",
    width: 480,
    height: 700,
    margin: "0px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "red" };
  const btnstyle2 = { margin: "4px 0" };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    apartment: "",
    password: "",
    confirmPassword: "",
    TermsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short").required("Required"),
    email: Yup.string().email("Enter a Valid Email").required("Required"),
    phone: Yup.number()
      .typeError("Enter a Valid Phone Number")
      .required("Required"),
    apartment: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters long")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password Does not Match! ")
      .required("Required"),
    TermsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept Terms & Conditions!"
    ),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    apartment: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostDate = async (e) => {
    e.preventDefault();

    const { name, email, phone, apartment, password, confirmPassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        apartment,
        password,
        confirmPassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("INVALID REGISTRATION");
      console.log("INVALID REGISTRATION");
    } else {
      window.alert("REGISTRATION SUCCESSFUL");
      console.log("SUCCESSFUL REGISTRATION");
      history.push("/login");
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>S</Avatar>
          <Typography variant="caption">
            {" "}
            Please fill this form to crate an account
          </Typography>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          method="POST"
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter Your Full Name"
                fullWidth
                required
                helperText={<ErrorMessage name="name" />}
              />

              <Field
                as={TextField}
                label="Email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter Your Email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />

              <Field
                as={TextField}
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Enter Your Phone Number"
                fullWidth
                required
                helperText={<ErrorMessage name="phone" />}
              />

              <Field
                as={TextField}
                label="Apartment"
                name="apartment"
                value={user.apartment}
                onChange={handleInputs}
                placeholder="Enter Your Apartment Unit"
                fullWidth
                required
                helperText={<ErrorMessage name="apartment" />}
              />

              <Field
                as={TextField}
                label="Password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter Your Password"
                fullWidth
                required
                type="password"
                helperText={<ErrorMessage name="password" />}
              />

              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                value={user.ConfirmPassword}
                onChange={handleInputs}
                placeholder="Please Confirm Your Passworde"
                fullWidth
                required
                type="password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />

              <FormControlLabel
                control={
                  <Field as={Checkbox} checkbox name="TermsAndConditions" />
                }
                label="I accept the terms and conditions."
              />
              <FormHelperText>
                <ErrorMessage name="TermsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle2}
                fullWidth
                onClick={PostDate}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign UP"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
