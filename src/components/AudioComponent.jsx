import React from 'react'
import './AudioComponent.css'

export default function AudioComponent({ source }) {
    // const [play, setPlay] = useState()
    let audio = new Audio(source)
    const start = () => {
        audio.play();
    }
    return (<>
        <button className='play' onClick={start}></button>
    </>

    )
}



