import React, { useEffect, useRef, useState  , useContext} from 'react';

// Components
import Loader from './Loader';
import Coin from './Coin';

// Api
import { getCoin } from '../Services/Api';

// Styles
import { Input  , Container , ToggleContainer} from '../Styles/Landing';


// Context
import {ToggleContext} from "../App";
// import { SetToggleContext } from '../App';

const Landing = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");

    const input = useRef(null);

    const changeToggle = useContext(ToggleContext);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            setCoins(data);
        }
        fetchApi();

        input.current.focus();
    } , [])

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <Container>
            <ToggleContainer>
                <div className="toggleSwitch" >
                    <label>
                        <input onClick={changeToggle} type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
            </ToggleContainer>
            <Input ref={input} value={search} onChange={handleSearch}/>
            {
                coins.length 
                ? 
                searchedCoins.map(coin => <Coin
                    key={coin.id} 
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                />)
                :
                <Loader />
            }
        </Container>
    );
};

export default Landing;