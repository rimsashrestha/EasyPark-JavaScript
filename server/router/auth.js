const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../DB/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, apartment, password, cpassword } = req.body;
  if (!name || !email || !phone || !apartment || !password || !cpassword) {
    return res.status(422).json({ error: "please fill in the missing field" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password Does Not Match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        apartment,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "user registration successful" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: " Please fill the missing field" });
    }

    const userLogin = await User.findOne({ email: email });

    //    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: " User Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});



router.get('/logout', (req, res) => {
  console.log(`Hello Logout`);
  res.clearCookie('jwtoken',{path:'/'});
  res.status(200).send("User Logout");
});


module.exports = router;
