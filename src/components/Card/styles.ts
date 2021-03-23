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

    img {
        width: 96px;
        height: 96px;
        border-radius: 46px;
        border: 5px solid #fff;
    }
`;