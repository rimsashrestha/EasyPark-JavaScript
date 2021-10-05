import React from 'react';
import './AboutStyle.css';
import imageRimsa from '../../images/Sample.jpg';
import imageNotFound from '../../images/ImageNotFound.jpg';
import imageSachin from '../../images/Sachin.jpg';

function About() {
    return (
        <div>
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
            </div>
            
            <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={imageSachin} alt="Sachin" class="center"/>
                        <div class="container">
                            <h2>Sachin Karki</h2>
                            <p class="title">Business Analyst</p>
                            <p>Some text that describes Sachin Karki.</p>
                            <p>sachin@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageNotFound} alt="Samrat" class="center"/>
                        <div class="container">
                            <h2>Samrat Bhattarai</h2>
                            <p class="title">Product Tester</p>
                            <p>Some text about Samrat.</p>
                            <p>samrat@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageNotFound} alt="Norbu" class="center"/>
                        <div class="container">
                            <h2>Norbu Tsering Lama</h2>
                            <p class="title">Product Director</p>
                            <p>Some text about Norbu.</p>
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
                            <p>Some text about Rimsa.</p>
                            <p>rimsa@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageNotFound} alt="Malik" class="center"/>
                        <div class="container">
                            <h2>Malik Bakht</h2>
                            <p class="title">Product Developer</p>
                            <p>Some text about Malik.</p>
                            <p>malik@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src={imageNotFound} alt="Buddharaj" class="center"/>
                        <div class="container">
                            <h2>Buddharaj KC</h2>
                            <p class="title">VP Sales</p>
                            <p>Some text about Buddharaj.</p>
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
