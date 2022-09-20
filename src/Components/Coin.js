import React from 'react';
import styled , {css} from 'styled-components/macro';

// Styles
import { Container ,  CoinImage , CoinSpan} from '../Styles/Coin';

const Coin = (props) => {
    const {name , symbol , image , price , marketCap , priceChange} = props;
    return (
        <Container>
            <CoinImage src={image} alt="coin"/>
            <CoinSpan css={`font-weight:bold;`}>{name}</CoinSpan>
            <CoinSpan>{symbol}</CoinSpan>
            <CoinSpan>$ {price.toLocaleString()}</CoinSpan>
            <CoinSpan css={`color: ${priceChange > 0 ? "green" : "red"};`}>{priceChange.toFixed(2)}%</CoinSpan>
            <CoinSpan>$ {marketCap.toLocaleString()}</CoinSpan>
        </Container>
    );
};

export default Coin;