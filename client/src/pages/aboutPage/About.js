import React from 'react';
import './AboutStyle.css';
import imageRimsa from '../../images/team/Rimsa.jpg';
import imageMalik from '../../images/team/Malik.jpg';
import imageSachin from '../../images/team/Sachin.jpg';
import imageNorbu from '../../images/team/Norbu.jpg';
import imageBuddharaj from '../../images/team/Buddharaj.jpg';
import imageSamrat from '../../images/team/Samrat.jpg';

function About() {
    return (
        <div>
            <div class="about-section">
                <h1>About Us Page</h1>
                <div class="about-text">
                    <p>Welcome to Easy Park, your number one solution to your parking problem.</p>
                    <p>We are dedicated to providing you the very best of parking, with an emphasis on ease of parking.</p>
                </div>
            </div>
            
            <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={imageSachin} alt="Sachin" class="center"/>
                        <div class="container">
                            <h2>Sachin Karki</h2>
                            <p class="title">Business Analyst</p>
                            <p>sachin@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageSamrat} alt="Samrat" class="center"/>
                        <div class="container">
                            <h2>Samrat Bhattarai</h2>
                            <p class="title">Product Tester</p>
                            <p>samrat@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageNorbu} alt="Norbu" class="center"/>
                        <div class="container">
                            <h2>Norbu Tsering Lama</h2>
                            <p class="title">Product Director</p>
                            <p>norbu@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={imageRimsa} alt="Rimsa" class="center"/>
                        <div class="container">
                            <h2>Rimsa Shrestha</h2>
                            <p class="title">Product Manager</p>
                            <p>rimsa@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageMalik} alt="Malik" class="center"/>
                        <div class="container">
                            <h2>Malik Bakht</h2>
                            <p class="title">Product Developer</p>
                            <p>malik@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageBuddharaj} alt="Buddharaj" class="center"/>
                        <div class="container">
                            <h2>Buddharaj KC</h2>
                            <p class="title">VP Sales</p>
                            <p>buddharaj@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
