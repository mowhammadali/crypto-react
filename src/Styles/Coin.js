import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    padding: 15px 25px;
    background-color: ${props => props.theme.secondaryBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.borderColor};

    @media screen and (max-width: 1200px){
        width: 80%;
    }

    @media screen and (max-width: 998px){
        width: 100%;
    }

    @media screen and (max-width: 576px){
        padding: 15px 15px;
    }
`

export const CoinImage = styled.img`
    width: 50px;

    @media screen and (max-width: 768px){
        width: 30px;
    }

    @media screen and (max-width: 576px){
        width: 20px;
    }
`

export const CoinSpan = styled.span`
    font-size: 16px;
    color: ${props => props.theme.secondaryColor};

    @media screen and (max-width: 768px){
        font-size: 12px;
        font-weight: normal !important;
    }

    @media screen and (max-width: 400px){
        font-size: 10px;
    }
`
