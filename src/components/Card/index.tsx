import React from 'react'

import {
    Container,
    CardContainer,
    TopCard,
    Profile
} from './styles'

import bgCartTop from '../../assets/bg-pattern-card.svg'
import profileImg from '../../assets/image-victor.jpg'

const Card:React.FC = () => {
    return (
        <Container>
            <CardContainer>
                <TopCard>
                    <img src={bgCartTop} alt="background-top"/>
                </TopCard>
                <Profile>
                    <img src={profileImg} alt="profile-img"/>
                </Profile>
                

            </CardContainer>
        </Container>
    )
}

export default Card