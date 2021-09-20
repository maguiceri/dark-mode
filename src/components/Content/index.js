import React, {useContext} from 'react';
import "./styles.scss"
import ThemeContext from "../../contexts/ThemeContext";

function Content (){
    const theme = useContext(ThemeContext)
    return(
        <div className={`${theme} content`}></div>
    )
}

export default Content;