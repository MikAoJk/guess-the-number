'use client';

import React, {useState} from 'react';


export const Guessthenumber = () => {
    const [number, setNumber] = useState(randomIntFromInterval(1, 10))

    return (
        <div className="m-auto pb-5">
            <h1>The number is {number}</h1>
        </div>
    );

}
function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
