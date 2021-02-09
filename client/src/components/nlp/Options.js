import React from 'react'
import Lemmatizing from './options/Lemmatizing'
import PosTag from './options/PosTag'
import Stemming from './options/Stemming'
import Tokenize from './options/Tokenize'
import './nlp.css'


export default function Options({ textInput, setOutput, setArray }) {

    return (
        <div className="options-container">
            <hr />
            <Tokenize textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
            <Stemming textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
            <Lemmatizing textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
            <PosTag textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
        </div>
    )
}
