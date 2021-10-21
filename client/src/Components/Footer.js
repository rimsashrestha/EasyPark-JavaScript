import React from 'react'
import './footer.css'

import styled from 'styled-components'

const Container = styled.div`
    min-height:20vh;
    padding: 80px 60px;
    background: black;
    justify-content: center;
`


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width:1000px;
    margin:0 auto;
`

const Row = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;
    @media (max-width: 550px){
        grid-template-columns:1fr;
        grid-gap:20px;
    }

`
const Column = styled.div`
    text-align: center;
    display:flex;
    flex-direction: column;
    max-width:200px;
    margin:0 auto;


`


const Title = styled.h2`
    color:white;
    max-width: 200px;
    text-align: center;
    margin-bottom:20px;

`

const Link = styled.a`
    color:white;
    margin-bottom:20px;
    text-decoration:none;
    font-size:20px;
    max-width:200px;
    &:hover {
        background-color:green;
        border-radius: 4px;
        transition: all 0.2s ease-out;
        color:purple;
    }


`


const Footer = () => {
    return (
        <Container>
        <Wrapper>
            <Row>
                <Column>
                    <Title>Easypark</Title>
                    <Link>address</Link>
                    <Link>city</Link>
                    <Link>zip</Link>
                    <Link>phone</Link>
                </Column>
                <Column>
                    <Title>Easypark</Title>
                    <Link href="/">Home</Link>
                    <Link href = "/about">About</Link>
                    <Link href = "/contact_us">Contact</Link>
                    <Link href = "/account">Account</Link>
                </Column>
                <Column>
                    <Title>Social Medias</Title>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Twitter</Link>
                    <Link href = "/">Youtube</Link>
                </Column>
            </Row>

        </Wrapper>
        </Container>
    )
}

export default Footer




// const Footer = () => {
//     return (
//         <div className="headings">
//             <div className="container">
//                 <div className="row">
//                     <div className="column">
//                         <h3>Easy ParK</h3>
//                         <ul className="list" >
//                             <li>123-456-7896</li>
//                             <li>abc street</li>
//                             <li>Lubbock, Texas, 79415</li>
//                         </ul>
//                     </div>
//                     <div className="column">
//                         <h3><a href = "/">Home</a></h3>
//                         <h3><a href = "/guest">Guest</a></h3>
//                         <h3><a href = "/about">About Us</a></h3>
//                         <h3><a href = "/contact">Contact Us</a></h3>
//                         <h3><a href = "/account">My Account</a></h3>
       
//                     </div>
//                     <div className="col">
//                         <h3>Social Medias</h3>
//                         <ul className="list">
//                             <li>Facebook</li>
//                             <li>Youtube</li>
//                             <li>Twitter</li>
//                         </ul>
//                     </div>
//                 </div>
    
//             </div>
    
//         </div>
//       );
// }

// export default Footer
