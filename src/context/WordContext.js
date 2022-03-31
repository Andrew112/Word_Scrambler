import React, { createContext, useEffect, useState } from 'react';

import { API_URL } from '../api.js'
import axios from 'axios';

//import { randomize } from '../helper/randomize_.js';

//this sends word context across the application.
export const WordContext = createContext();


//this function gloabalizes the app.""
//destructuring for the use of props.({children})""
export const WordContextProvider = ({ children }) => {
    const [phrase, setPhrase] = useState('');
    const [scrambledPhrase, setScrambledPhrase] = useState('');
    const [counter, setCounter] = useState(1);
    const [correctAns, setCorrectAns] = useState(0);
         //function for loading word data 
    useEffect(() => {
        const loadPhrase = async () => {
            const { data } = await axios.get(`${API_URL}/${counter}`);
            const sentence = data.data.sentence;
            setPhrase(sentence)
            setCorrectAns(0);
            console.log(sentence)
            //console.log(data)
        }
        loadPhrase();
    }, [counter])

    //this wordcontext wraps all of our dependents from other classes.
    return (
        <WordContext.Provider value={{ phrase, setPhrase, scrambledPhrase, setScrambledPhrase, counter, setCounter, correctAns, setCorrectAns }}>
            {children}
        </WordContext.Provider>
    )
}