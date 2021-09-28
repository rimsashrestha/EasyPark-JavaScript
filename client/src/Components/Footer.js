import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
   
const useStyles = makeStyles(theme => ({
    heading:{
        color: "white", 
        textAlign: "center", 
        background: 'black'
    }
}));


   



const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.heading}>
        <div className="container">
            <div className="row">
                <div className="column">
                    <h3>Easy ParK</h3>
                    <ul className="list">
                        <li>123-456-7896</li>
                        <li>abc street</li>
                        <li>Lubbock, Texas, 79415</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Home</h3>
                    <h3>Guest</h3>
                    <h3>About Us</h3>
                    <h3>Contact Us</h3>
                    <h3>My Account</h3>
   
                </div>
                <div className="col">
                    <h3>Social Medias</h3>
                    <ul className="list">
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
  );
};
export default Footer;