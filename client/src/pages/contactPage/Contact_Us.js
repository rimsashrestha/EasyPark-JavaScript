import React from 'react'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'
import './Contact.css'


function Contact_Us() {
    return (
        <section>
            <div className="body" >
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Contact Us</h2>
                <p style={{ fontSize: "20px", textAlign: "center" }}>Easy Park is a modern day solution for managing apartments parking. Please feel free to contact us about any questions you have about us.</p>

                <Card style={{ maxWidth: 600, margin: "30px auto", padding: "10px 5px" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">Contact Us</Typography>
                        <Typography gutterBottom variant="body" color="textSecondary" component="p">Fill out the form and we will get back to you</Typography>
                        <form>
                            <Grid container spacing={1}>

                                <Grid git xs={12} sm={6} item>
                                    <TextField label="First Name" placeholder="Enter first Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Message/Query" multiline rows={9} placeholder="Enter your message or queries" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth >Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Contact_Us
