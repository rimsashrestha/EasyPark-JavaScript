import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import "./Contact.css";
import { useHistory } from "react-router";
//import router from '../../../../server/router/auth';

const handleInputs = (e) => {
  const name = e.target.name;
  const value = e.target.value;
};

const Contact_Us = () => {
  const [userData, setUserData] = useState({});

  return (
    <section>
      <div className="body">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Contact Us
        </h2>
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          Easy Park is a modern day solution for managing apartments parking.
          Please feel free to contact us about any questions you have about us.
        </p>

        <Card
          style={{ maxWidth: 600, margin: "30px auto", padding: "10px 5px" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              gutterBottom
              variant="body"
              color="textSecondary"
              component="p"
            >
              Fill out the form and we will get back to you
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <TextField
                    label="Name"
                    value={userData.name}
                    placeholder="Enter You Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Phone"
                    placeholder="Enter Your Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Message/Query"
                    multiline
                    rows={9}
                    placeholder="Enter your message or queries"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// router.get('/getdata',authenticate ,(req,res)=>{
//     console.log ('Hello'
//     res.send(req.rootUser);
// })

// router.get('/getdata',authenticate ,(req,res)=>{
//     console.log ('Hello'
//     res.send(req.rootUser);
// })

export default Contact_Us;
