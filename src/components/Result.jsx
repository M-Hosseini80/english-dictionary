import React from 'react'

export default function Result(props) {
    return (
        <div>
            <h1>
                {props.word}
            </h1>
            <h2>
                {props.phonetics}
            </h2>
            <audio controls>
                <source src={props.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <hr />

            <h2>meanings:</h2>
            <p>
                partOfSpeech: {props.partOfSpeech}

                definitions: {props.definitions}

                more:

                {props.more}
            </p>
        </div>
    )
}
