import React from 'react'
import Tokenize from './options/Tokenize'


export default function Options({ textInput, setOutput, setArray }) {

    return (
        <div>
            <hr />
            <Tokenize textInput={textInput} setOutput={setOutput} setArray={setArray} />
            <hr />
        </div>
    )
}
