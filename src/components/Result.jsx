import React from 'react'
import './Result.css'
import AudioComponent from './AudioComponent'

export default function Result({ Data }) {
    // all data
    // console.log(Data)

    // let ourData = { partOfSpeechVal: '', originVal: '', exampleVal: '', definitionVal: '' };

    const iData = Data.map((data, index) => {

        return (
            <div className='item' key={index}>
                <div className='word'>
                    <h1>{data.word}</h1>
                    <div className='phonetics-partOfSpeech'>
                        <div className='phonetics'>
                            {
                                data.phonetics.map((phonetic, index) => {
                                    return (
                                        <div className='phonetic' key={index}>({phonetic.text}
                                            {phonetic.audio && <p><AudioComponent source={phonetic.audio} /></p>}
                                            )</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        )
    })



    return iData

}
