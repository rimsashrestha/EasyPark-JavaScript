import React from 'react'
import { 
    InfoContainer, 
    InfoCard, 
    InfoH1, 
    InfoH2, 
    InfoIcon, 
    InfoP, 
    InfoWrapper } from './infoElements'
import Icon1 from '../../images/Ppass.jpeg'
import Icon2 from '../../images/lock.png'


const Info = () => {
    return (
        
        <InfoContainer id='infomations'>
            <InfoH1> Our Services</InfoH1>
                <InfoWrapper>
                    <InfoCard>
                        <InfoIcon src={Icon1}/>
                        <InfoH2>Sticker Less System</InfoH2>
                        <InfoP>The service is hassle free. 
                            It helps the management to make more efficient work. 
                            As this is a virtual permit, it allows management for 
                            issueing any amount of permits.</InfoP>
                    </InfoCard>

                    <InfoCard>
                        <InfoIcon src={Icon2}/>
                        <InfoH2>Sticker Less System</InfoH2>
                        <InfoP>The service is hassle free. 
                            It helps the management to make more efficient work. 
                            As this is a virtual permit, it allows management for 
                            issueing any amount of permits.</InfoP>
                    </InfoCard>
                    <InfoCard>
                        <InfoIcon src={Icon1}/>
                        <InfoH2>Sticker Less System</InfoH2>
                        <InfoP>The service is hassle free. 
                            It helps the management to make more efficient work. 
                            As this is a virtual permit, it allows management for 
                            issueing any amount of permits.</InfoP>
                    </InfoCard>
                    

                </InfoWrapper>
            
        </InfoContainer>
            
        
    )
}

export default Info
