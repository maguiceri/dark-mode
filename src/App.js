import './App.scss';
import React, {useState} from 'react';
import Button from "./components/Button";
import Content from "./components/Content";
import {ThemeProvider} from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState('light');

  function handleTheme() {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme)
  }
  return (
    //utilizo una variable para no dejar un valor hardcodeado
    <ThemeProvider value={theme}>   
    <Button handleTheme={handleTheme}/>
    <Content />
    </ThemeProvider>
  );
}

export default App;
