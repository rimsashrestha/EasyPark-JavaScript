/* eslint-disable */ 
import React from 'react'
import styled from 'styled-components'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import bgImage from '../../images/guestParkingImage.jpeg'

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
    background-size:cover;
    
`
const Input = styled.input`
    padding: 10px;
    width: 100%;
    background-color: #fff;
    border: 1px solid black;
    font-size: 20px;
    color:black;
`


function Guest() {
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
            <form>

                <Card style={{ maxHeight: 1500, maxWidth: 600, margin: "30px auto", padding: "10px 5px" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">Guest Vehicle Registration form</Typography>
                        <Typography gutterBottom variant="body" color="textSecondary" component="p">Fill out the form to register your vehicle</Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid xs={12} item>
                                    <Input label="Search" type="text" placeholder="Search/Enter Parking or Apartment name"
                                        placeholderFontSize="20px" required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="First Name" placeholder="Enter first Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Phone Number" placeholder="Enter your phone number" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Unit number" placeholder="Enter the apt number" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Vehicle Make" placeholder="Enter vehicle make e.g. Honda" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Vehicle Model" placeholder="Enter vehicle model e.g. Civic " variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} xs={6} item>
                                    <TextField label="lisence Plate number" placeholder="Enter vehicle plate number" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} xs={6} item>
                                    <TextField label="Last 4 digit phoneNumber" placeholder="Enter unit owner last 4 digit of their phone number" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth >Register</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>

            </form>
        </MainContainer>
    )
}

export default Guest
