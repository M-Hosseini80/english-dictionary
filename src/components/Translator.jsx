import React, { useState, useEffect } from 'react'
import axios from "axios"


export default function Translator({ value }) {
    useEffect(
        () => {
            // setTimeout(function () {
            const dictionaryAPI = async () => {
                if (value > "") try {
                    const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
                    setDataWord(data.data)
                }
                    catch (error) {
                        console.log(error)
                    }
            }

            dictionaryAPI()
            // }, 2000);

        }, [value]
    )
    // const word = value;
    // const [word, setWord] = useState(value);
    const [dataWord, setDataWord] = useState([]);

    console.log(dataWord)


    return (
        <div>

        </div>
    )
}
