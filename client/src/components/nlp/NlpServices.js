import React, { useState } from 'react'
import Options from './Options';
import Outpput from './Output';
import './styles.css'

export default function NlpServices() {
    const [textInput, setTextInput] = useState("")
    const [output, setOutput] = useState()
    const [array, setArray] = useState(true)


    return (
        <div className="services-container">
            <h2>NLP Services</h2>
            <div className="services">
                <div className="service-input">
                    <textarea value={textInput} cols="30" rows="5" onChange={e => setTextInput(e.target.value)} />
                </div>
                <div className="service-options">
                    <Options textInput={textInput} setOutput={setOutput} setArray={setArray} />
                </div>
                <div className="service-output">
                    <Outpput output={output} array={array} />
                </div>
            </div>
        </div>

    )
}
