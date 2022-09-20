import styled from "styled-components";
import { colors } from "./Utilities/Utils";

export const Input = styled.input.attrs({
    type: "text",
    placeholder: "search"
})`
    width: 400px;
    font-size: 16px;
    padding: 12px 15px;
    margin-bottom: 50px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 10px;
    outline: none;
    background-color: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.secondaryColor};

    &::placeholder{
        font-size: 16px;

        @media screen and (max-width: 576px){
            font-size: 14px;
        }
    }

    @media screen and (max-width: 768px){
        margin-top: 30px;
    }

    @media screen and (max-width: 576px){
        width: 300px;
        font-size: 14px;
    }

    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const Container = styled.div`
    padding: 50px 100px;
    background-color: ${props => props.theme.primaryBackground};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 998px){
        padding: 50px 80px;
    }

    @media screen and (max-width: 576px){
        padding: 50px 30px;
    }

    @media screen and (max-width: 400px){
        padding: 50px 15px;
    }
`

export const ToggleContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 100px;

    @media screen and (max-width: 768px){
        top: 20px;
        right: auto;
        transform: translateX(-50%);
    }
    
    .toggleSwitch {
        position: relative;
        width: 100px;

        @media screen and (max-width: 768px){
            width: 80px;
        }
    }

    label {
        position: absolute;
        width: 100%;
        height: 50px;
        background-color: ${colors.toggle.dark};
        border-radius: 50px;
        cursor: pointer;

        @media screen and (max-width: 768px){
            height: 30px;
        }
    }

    input {
        position: absolute;
        display: none;
    }

    .slider {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: 0.3s;
        transform: translateX(-50%);
    }

    input:checked ~ .slider {
        background-color: ${colors.toggle.light};
    }

    .slider::before {
        content: "";
        position: absolute;
        top: 5px;
        left: 14px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        box-shadow: inset 14px -4px 0px 0px ${colors.toggle.light};
        background-color: ${colors.toggle.dark};
        transition: 0.3s;

        @media screen and (max-width: 768px){
            width: 24px;
            height: 24px;
            top: 3px;
            left: 7px;
            box-shadow: inset 7px -4px 0px 0px ${colors.toggle.light};
        }
    }

    input:checked ~ .slider::before {
        transform: translateX(35px);
        background-color: ${colors.toggle.dark};
        box-shadow: none;

        @media screen and (max-width: 768px){
            transform: translateX(45px);
        }
    }
`