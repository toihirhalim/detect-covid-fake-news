import React, { useState } from 'react'
import Options from './Options';
import Outpput from './Output';
import './nlp.css'

export default function NlpServices() {
    const [textInput, setTextInput] = useState("")
    const [output, setOutput] = useState()
    const [array, setArray] = useState(false)

    return (
        <div className="services-container">
            <h2>NLP Services</h2>
            <div className="services">
                <div className="service-input">
                    <div>
                        <p>enter text :</p>
                        <textarea value={textInput} cols="40" rows="20" onChange={e => setTextInput(e.target.value)} />
                    </div>

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
