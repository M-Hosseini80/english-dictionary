import React, { useCallback } from 'react'
import './Result.css'
import AudioComponent from './AudioComponent'

export default function Result({ Data, setValues }) {
    // all data

    const evHandler = useCallback(event => {
        setValues(event.target.innerHTML)
    }, [setValues])




    const iData = Data.map((data, index) => {

        return (
            // actually I know I could use specific ITEM Component, But I prefer to put it here!
            <div className='item' key={index}>
                <div className='word'>
                    <h1>{data.word}</h1>
                    <div >
                        <div className='phonetics'>
                            {
                                data.phonetics.map((phonetic, index) => {
                                    return (
                                        <div className='phonetic' key={index}>{phonetic.text}
                                            {phonetic.audio && <AudioComponent source={phonetic.audio} />}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className='partOfSpeech'>
                            {data.meanings[0].partOfSpeech && <span>({data.meanings[0].partOfSpeech})</span>}
                        </div>

                    </div>
                </div>
                <div className='flex'>

                    {
                        data.meanings.map((item, index) => {

                            let DEFINITION = false;
                            let EXAMPLE = false;
                            let SYNONYMS = false;
                            let ANTONYMS = false;

                            if (item.definitions[0].definition !== undefined) {
                                if (item.definitions[0].definition.length > 0) {
                                    DEFINITION = true;

                                }
                            }

                            if (item.definitions[0].example !== undefined) {
                                if (item.definitions[0].example.length > 0) {
                                    EXAMPLE = true;

                                }
                            }

                            if (item.definitions[0].synonyms !== undefined) {
                                if (item.definitions[0].synonyms.length > 0) {
                                    SYNONYMS = true;


                                }
                            }

                            if (item.definitions[0].antonyms !== undefined) {
                                if (item.definitions[0].antonyms.length > 0) {
                                    ANTONYMS = true;

                                }
                            }

                            return (
                                <div className='readMore' key={index}>
                                    {item.partOfSpeech && <><h3>PART OF SPEECH</h3><p style={{ fontStyle: 'italic' }}>{item.partOfSpeech}</p></>}
                                    {DEFINITION && <><h3>DEFINITION</h3><p>{item.definitions[0].definition}</p></>}
                                    {EXAMPLE && <><h3>EXAMPLE</h3><p>{item.definitions[0].example}</p></>}
                                    {/* {SYNONYMS && <><h3>SYNONYMS</h3><p>{JSON.parse(JSON.stringify(item.definitions[0].synonyms.join(",")))}</p></>} */}
                                    {SYNONYMS && <><h3>SYNONYMS</h3> {item.definitions[0].synonyms.map((item, index) => {
                                        return (
                                            <React.Fragment key={item}><button onClick={evHandler} key={index}>{item}</button><span className='spotButton'>,</span></React.Fragment>
                                        )
                                    })}</>}
                                    {ANTONYMS && <><h3>ANTONYMS</h3><p>{JSON.parse(JSON.stringify(item.definitions[0].antonyms.join(",")))}</p></>}
                                </div>

                            )

                        })
                    }
                </div>
                <div>
                    {data.origin !== undefined && <><h3>ORIGIN</h3> {data.origin}</>}
                </div>
            </div>

        )
    })



    return iData

}
