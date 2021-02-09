import React from 'react'
import Stemming from './options/Stemming'
import Tokenize from './options/Tokenize'


export default function Options({ textInput, setOutput, setArray }) {

    return (
        <div>
            <hr />
            <Tokenize textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
            <Stemming textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
        </div>
    )
}
