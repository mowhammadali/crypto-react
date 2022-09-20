import React , { useState } from 'react';
import styled , {ThemeProvider} from 'styled-components';

// Components
import Landing from './Components/Landing';

// Styles
import {LightMode , DarkMode} from "./Styles/Themes/Theme";
import GlobalStyles from './Styles/Global/GlobalStyles';

// Context
export const ToggleContext = React.createContext();

const App = () => {

    const [toggle , setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <ThemeProvider theme={toggle ? DarkMode : LightMode}>
            <ToggleContext.Provider value={handleToggle}>
                    <div>
                        <GlobalStyles light={toggle}/>
                        <Landing />
                    </div>
            </ToggleContext.Provider>
        </ThemeProvider>
    );
};

export default App;