/* eslint-disable */
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useHistory } from "react-router-dom";

const Login = ({ handleChange }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("INVALID CREDENTIALS");
    } else {
      window.alert("LOGIN SUCCESSFUL");
      history.push("/");
    }
  };

  const paperStyle = {
    padding: 20,
    width: 480,
    margin: "0px auto",
    height: 700,
  };
  const avatarStyle = { backgroundColor: "red", fontsize: "15px" };
  const btnstyle = { margin: "8px 0" };
  const initialValues = {
    Email: "",
    Password: "",
    remember: false,
  };
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email("Please Enter Valid Email").required("Required"),
    Password: Yup.string().required("Required"),
  });

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>S</Avatar>
          <h2>LOG IN</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form method="POST">
              <Field
                as={TextField}
                label="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Full Name"
                fullWidth
                required
                helperText={<ErrorMessage name="Email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Email"
                fullWidth
                required
                type="password"
                helperText={<ErrorMessage name="Password" />}
              />

              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={btnstyle}
                fullWidth
                onClick={loginUser}
              >
                {props.isSubmitting ? "Loading" : "Sign In"}
              </Button>
            </Form>
          )}
        </Formik>

        <Typography>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        <Typography>
          {" "}
          Don't Have an Account?
          <Link href="#" onClick={() => handleChange("event", 0)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
