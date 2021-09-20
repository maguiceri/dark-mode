import React, {useContext} from 'react';
import "./styles.scss";
import ThemeContext from "../../contexts/ThemeContext";

function Button(props) {
    const theme = useContext(ThemeContext);
    return(
        <button className={theme} onClick={() => props.handleTheme()}>Soy un boton</button>
    )
}

export default Button;
