import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
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
            <Form>
              <Field
                as={TextField}
                label="Email"
                name="Email"
                placeholder="Enter Your Full Name"
                fullWidth
                required
                helperText={<ErrorMessage name="Email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="Password"
                placeholder="Enter Your Email"
                fullWidth
                required
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
