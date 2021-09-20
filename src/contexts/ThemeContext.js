import React from 'react';

const ThemeContext = React.createContext('light'); //porque se que no va a escalar, si lo quiero escalable deberia poner({theme:'light'})
export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
