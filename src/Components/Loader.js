import React from 'react';
import styled , {keyframes} from "styled-components";

// Utilities
import { colors } from '../Styles/Utilities/Utils';

const Rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Container = styled.div`
    background-color: ${props => props.theme.primaryBackground};
`

const Spinner = styled.div`
    width: 100px;
    height: 100px;
    border: 4px solid ${colors.spinner.gray};
    border-radius: 50%;
    border-top-color: ${colors.spinner.black};
    margin: 50px auto;
    animation: ${Rotation} .7s linear 0s infinite;
    animation: name duration timing-function delay iteration-count direction fill-mode;
`

const Loader = () => {
    return (
        <div>
            <Spinner></Spinner>
        </div>
    );
};

export default Loader;