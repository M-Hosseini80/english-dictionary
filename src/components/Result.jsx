import React from 'react'

export default function Result({ Data }) {
    const iData = Data.map((data, index) => {
        console.log(data)
        return (
            <div className="item" key={index}>
                <h1>{data.word}</h1>


                {data.phonetics.map((item, key) => {
                    // <p>{item.text}</p>

                    return (<div key={key} >
                        <p>{item.text}</p>
                        {
                            item.audio && <audio controls>
                                <source src={item.audio} />
                            </audio>
                        }
                    </div>)
                })}



            </div >
        )

    })
    return iData

}
