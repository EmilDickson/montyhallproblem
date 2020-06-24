import React from "react";
import monty from "../images/Monty_hall.png";
import problem from "../images/Monty_open_door.png";

const Images = () => (
    <div className='images'>
        <img src={monty} alt='Monty Hall' />
        <img src={problem} alt='Monty Problem' />
    </div>
);

export default Images;
