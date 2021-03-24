import React from 'react'

import {
    Container,
    CardContainer,
    TopCard,
    Profile,
    ProfileInfo,
    Line,
    ExtraInfo,
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
                    <ProfileInfo>
                        <h1>Victor Crest</h1>
                        <p>26</p>
                    </ProfileInfo>
                    <p>London</p>
                </Profile>

                <Line />

                <ExtraInfo>
                    <ul>
                        <li>
                            <h1>80K</h1>
                            <p>Followers</p>
                        </li>
                        <li>
                            <h1>803K</h1>
                            <p>Likes</p>
                        </li>
                        <li>
                            <h1>1.4K</h1>
                            <p>Photos</p>
                        </li>
                    </ul>    
                </ExtraInfo>

            </CardContainer>
        </Container>
    )
}

export default Card