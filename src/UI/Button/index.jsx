import React, { useState } from "react";
import style from './Button.module.css';

export function Button(props) {
    const { text, ...otherProps } = props;
    const [buttonText, setButtonText] = useState(text);
    const [colorText, setColorText] = useState('black');
    const [buttonColor, setButtonColor] = useState('white');
  

    const handleClick = async() => {
        setButtonColor('#F1F3F4');
        setColorText('#339933');
        setButtonText('Request Submitted');


        // Отправка POST-запроса
      
    };

    return (
        <button
            type="button"
            className={style.formButton} 
            onClick={handleClick}
            style={{ backgroundColor: buttonColor,color:colorText }}
        >
            {buttonText}
        </button>
    );
}