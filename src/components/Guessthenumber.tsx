'use client';

import React, {ChangeEvent, useState} from 'react';


export const Guessthenumber = () => {
    const [randomNumber, setRandomNumber] = useState<number>(randomIntFromInterval(1, 10))
    const [guessedNumber, setGuessedNumber] = useState<number>()
    const [guessedCorrectNumber, setGuessedCorrectNumber] = useState<boolean>(false)


    const setNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) !== 0) {
            const guessedNumber = Number(event.target.value)
            setGuessedNumber(guessedNumber)
            if (guessedNumber === randomNumber) {
                setGuessedCorrectNumber(true)
            } else {
                setGuessedCorrectNumber(false)
            }
        }
    }

    return (
        <div className="m-auto pb-5 mt-20 ml-4 mr-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Guess a random number</h1>
            <p className="flex items-center justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                The number is between 1 and 10</p>
            <form className="max-w-sm mx-auto">
                <div className="relative">
                    <input type="number" id="guessed-number-input" aria-describedby="helper-text-explanation"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="example inputs 5 or 7" required onChange={setNumberHandler}/>
                </div>
            </form>
            <div className="flex items-center justify-center mt-10">
                {guessedCorrectNumber &&
                    <div>
                        <p className="flex items-center justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-green-900">
                            You guessed the correct number</p>
                        <p className="flex items-center justify-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            the number was {guessedNumber}</p>
                    </div>
                }
                {(!guessedCorrectNumber && guessedNumber !== 0 && guessedNumber !== undefined ) &&
                    <h1 className="text-lg">You guessed the number: {guessedNumber}</h1>
                }
            </div>
        </div>
    );

}

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
