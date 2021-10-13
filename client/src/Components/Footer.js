import React from 'react'
import './footer.css'

// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
   
// const useStyles = makeStyles(theme => ({
//     heading:{
//         color: "white", 
//         textAlign: "center", 
//         background: 'black'
//     },
    
// }));



const Footer = () => {
    return (
        <div className="headings">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h3>Easy ParK</h3>
                        <ul className="list" >
                            <li>123-456-7896</li>
                            <li>abc street</li>
                            <li>Lubbock, Texas, 79415</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3><a href = "/">Home</a></h3>
                        <h3><a href = "/guest">Guest</a></h3>
                        <h3><a href = "/about">About Us</a></h3>
                        <h3><a href = "/contact">Contact Us</a></h3>
                        <h3><a href = "/account">My Account</a></h3>
       
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
}

export default Footer

   



// const Footer = () => {
//     // const classes = useStyles();
//   return (
//     <div className="headings">
//         <div className="container">
//             <div className="row">
//                 <div className="column">
//                     <h3>Easy ParK</h3>
//                     <ul className="list" >
//                         <li>123-456-7896</li>
//                         <li>abc street</li>
//                         <li>Lubbock, Texas, 79415</li>
//                     </ul>
//                 </div>
//                 <div className="column">
//                     <h3><a href = "/">Home</a></h3>
//                     <h3><a href = "/guest">Guest</a></h3>
//                     <h3><a href = "/about">About Us</a></h3>
//                     <h3><a href = "/contact">Contact Us</a></h3>
//                     <h3><a href = "/account">My Account</a></h3>
   
//                 </div>
//                 <div className="col">
//                     <h3>Social Medias</h3>
//                     <ul className="list">
//                         <li>Facebook</li>
//                         <li>Youtube</li>
//                         <li>Twitter</li>
//                     </ul>
//                 </div>
//             </div>

//         </div>

//     </div>
//   );
// };
// export default Footer;