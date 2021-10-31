/* eslint-disable */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import bgImage from '../../images/parkingImage3.jpeg'
// import location from '../../service/location'
import axios from 'axios'
import './Guest.css'

// import ParkingLots from '../../Components/ParkingSpots/Slots'

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1rem;
    color:white;
    text-shadow: 2px 2px brown;
    p{
        font-size: 1.4rem;
        font-display: initial;
        
    }
`
const MainContainer = styled.div`
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;
    
`
const Input = styled.input`
    padding: 10px;
    width: 100%;
    background-color: #fff;
    border: 1px solid black;
    font-size: 20px;
    color:black;
`

let numberofParkings

const initialState = {
    location: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    unitNumber: '',
    vehicleMake: '',
    vehicleModel: '',
    lisencePlate: '',
    last4Digits: '',
    spotNumber: ''
  };

function Guest() {

    const [location, setLocation] = useState([])
    const [isclicked, setisClicked] = useState(false)
    const [input, setInput] = useState({
        location: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        unitNumber: '',
        vehicleMake: '',
        vehicleModel: '',
        lisencePlate: '',
        last4Digits: '',
        spotNumber: ''
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event) {
        setisClicked(!isclicked)

    }

    function handleChange2(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        

        axios.get(`http://localhost:5000/search?term=${value}`)
            .then(res => {
                if(typeof(res) != 'undefined') {
                    res.data.map((element, index)=>{
                        if(!location.includes(element.location)){
                            setLocation(oldArray => [...oldArray, element.location]);
                            console.log(element)
                        }
                        
                    }) 
                }
                

                
                // console.log(res.data)
            });



    }

    function handleApt() {
        setisClicked(!isclicked)


        var htmlElements = "";
        for (var i = 0; i < numberofParkings; i++) {
            console.log(id)
            htmlElements += `<div className="col">nkdfnkjbdf</div>`
        }
        
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;
        
    }
    
    function handleOnClick(event) {
        event.preventDefault();
        const guestInfo = {
            location: input.location,
            firstName: input.firstName,
            lastName: input.lastName,
            phoneNumber: input.phoneNumber,
            unitNumber: input.unitNumber,
            vehicleMake: input.vehicleMake,
            vehicleModel: input.vehicleModel,
            lisencePlate: input.lisencePlate,
            last4Digits: input.last4Digits,
            spotNumber: input.spotNumber
        }
        console.log(guestInfo)
        axios.post('http://localhost:5000/guest', guestInfo);


        setInput({ ...initialState });
        window.alert('Registration Successful, Thank you!')
    }

    return (
        <MainContainer>
            <Intro>
                <h3>Welcome to our Guest Vehicle Registration System</h3>
                <p>
                    Our application will allow users to temporarily register their vehicles in the selected parking premise for 24 hours.
                    It only takes a minute to complete the process and You do not have to worry about geting your vehicles towed for next 24 hours.
                    Since the parking is temporary your information will be deleted from the databse.
                </p>
            </Intro>
            <div className="mainContainer">
                <form id="form">

                    <Card style={{ maxHeight: 1500, maxWidth: 600, margin: "30px auto", padding: "10px 5px" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">Guest Vehicle Registration form</Typography>
                            <Typography gutterBottom variant="body" color="textSecondary" component="p">Fill out the form to register your vehicle</Typography>
                            <Grid container spacing={2}>
                                <Grid xs={12} item>
                                    <TextField name='location' value={input.location} label="Search" type="search" placeholder="Search/Enter Parking or Apartment name"
                                        placeholderFontSize="20px" onChange={handleChange2} onClick={handleClick} required fullWidth spotFun />

                                    {isclicked && input.location &&
                                        location.map((element, index) => {
                                            // string = input.location.toLowerCase()
                                            if (element.toLowerCase().includes(input.location.toLowerCase())) {
                                                return (<p onClick={() => {
                                                    
                                                    setInput({
                                                        location: element

                                                    })
                                                    numberofParkings = element.numbers
                                                    handleApt()
                                                    console.log(element)
                                                }}>
                                                    {element}
                                                </p>)
                                            }
                                        })
                                    }
                                </Grid>
                                
                                <Grid xs={12} sm={6} item>
                                    <TextField onChange={handleChange} name='firstName' value={input.firstName} label="First Name" placeholder="Enter first Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField name='lastName' value={input.lastName} label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField name='phoneNumber' value={input.phoneNumber} label="Phone Number" placeholder="Enter your phone number" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField name='unitNumber' value={input.unitNumber} label="Unit Number" placeholder="Enter your unit number" variant="outlined" placeholder="Enter the apt number" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField name='vehicleMake' value={input.vehicleMake} label="Vehicle Make" placeholder="Enter vehicle make e.g. Honda" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField name='vehicleModel' value={input.vehicleModel} label="Vehicle Model" placeholder="Enter vehicle model e.g. Civic " variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} xs={6} item>
                                    <TextField name='lisencePlate' value={input.lisencePlate} label="lisence Plate number" placeholder="Enter vehicle plate number" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} xs={6} item>
                                    <TextField type="number" name='last4Digits' value={input.last4Digits} label="Last 4 digit phoneNumber" placeholder="Enter unit owner last 4 digit of their phone number" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} xs={6} item>
                                    <TextField name='spotNumber' value={input.spotNumber} label="Spot Number" placeholder="Enter spotNumber" variant="outlined" fullWidth required onChange={handleChange} />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleOnClick}>Register</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                </form>
                <div id="container" className="container">
                                    

                </div>
                <script>{
                    function insertSpotNumber(event){
                        spotNumber = event.target.value;
                        console.log(spotNumber)
                    }
                    }
                
                </script>
            </div>                          
        </MainContainer>
    )
}


export default Guest