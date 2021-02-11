import React, { useState } from 'react'
import Lemmatizing from './options/Lemmatizing'
import PosTag from './options/PosTag'
import Stemming from './options/Stemming'
import Tokenize from './options/Tokenize'
import './nlp.css'


export default function Options({ textInput, setOutput, setArray }) {

    const [language, setLanguage] = useState('arabic')
    const [includeStopWords, setIncludeStopWords] = useState(true)


    return (
        <div className="options-container">
            <div className="language-opt-container">
                <select className="select-language" onChange={e => { setLanguage(e.target.value) }}>
                    <option value="arabic">Arabic</option>
                    <option value="english">English</option>
                </select>
                <label>
                    <input className="stop-wrd-chkbx" type="checkbox" defaultChecked={includeStopWords} onChange={e => { setIncludeStopWords(!includeStopWords) }} />
                    remove stop words
                </label>
            </div>

            <hr />
            <Tokenize textInput={textInput} setOutput={setOutput} setArray={setArray} language={language} includeStopWords={includeStopWords} />
            <hr />
            <Stemming textInput={textInput} setOutput={setOutput} setArray={setArray} language={language} includeStopWords={includeStopWords} />
            <hr />
            <Lemmatizing textInput={textInput} setOutput={setOutput} setArray={setArray} language={language} includeStopWords={includeStopWords} />
            <hr />
            <PosTag textInput={textInput} setOutput={setOutput} setArray={setArray} language={language} includeStopWords={includeStopWords} />
            <hr />
        </div>
    )
}
