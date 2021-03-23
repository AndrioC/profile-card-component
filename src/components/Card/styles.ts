import styled from 'styled-components'

export const Container = styled.div`
`;

export const CardContainer = styled.div`
    display: flex;
    background: var(--shape);
    height: 374px;
    width: 350px;
    border-radius: 15px;
    flex-direction: column;
    box-shadow: 0px 50px 100px -20px rgba(8, 70, 94, 0.504835);
`;

export const TopCard = styled.div`
    height: 140px;
    width: 100%;

    img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -48px;
    flex-direction: column;s

    img {
        width: 96px;
        height: 96px;
        border-radius: 46px;
        border: 5px solid #fff;
    }

    p {
        font-size: 14px;    
        color: #6B7082;
        margin-top: 9px;
        font-weight: 400;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;

    h1{
        font-size: 18px;
        font-weight: bold;
        margin-top: 24px;
    }

    p {
        margin-top: 25px;
        font-size: 18px;
        color: #6B7082;
        font-weight: lighter;
        margin-left: 9px;
    }
`;

export const Line = styled.div`
    background: #E8E9EC;
    width: 100%;
    height: 1px;
    margin-top: 30px;
`;