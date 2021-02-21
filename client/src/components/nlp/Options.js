import React, { useState } from 'react'
import Lemmatizing from './options/Lemmatizing'
import PosTag from './options/PosTag'
import Stemming from './options/Stemming'
import Tokenize from './options/Tokenize'
import './nlp.css'
import BagOfWords from './options/BagOfWords'


export default function Options({ textInput, setOutput, setArray }) {

    const [language, setLanguage] = useState('arabic')
    const [includeStopWords, setIncludeStopWords] = useState(true)
    const [divColor, setDivColor] = useState({})



    return (
        <div className="options-container">
            <div className="option">
                <select className="select-language" onChange={e => { setLanguage(e.target.value) }}>
                    <option value="arabic">Arabic</option>
                    <option value="english">English</option>
                </select>
                <label>
                    <input
                        className="stop-wrd-chkbx"
                        type="checkbox"
                        defaultChecked={includeStopWords}
                        onChange={e => { setIncludeStopWords(!includeStopWords) }}
                    />
                    remove stop words
                </label>
            </div>

            <hr />
            <div style={divColor.tokenize}>
                <Tokenize
                    textInput={textInput}
                    setOutput={setOutput}
                    setArray={setArray}
                    language={language}
                    includeStopWords={includeStopWords}
                    setDivColor={setDivColor}
                />
            </div>
            <hr />
            <div style={divColor.stemming} >
                <Stemming
                    textInput={textInput}
                    setOutput={setOutput}
                    setArray={setArray}
                    language={language}
                    includeStopWords={includeStopWords}
                    setDivColor={setDivColor}
                />
            </div>
            <hr />
            <div style={divColor.lemmatizing}>
                <Lemmatizing
                    textInput={textInput}
                    setOutput={setOutput}
                    setArray={setArray}
                    language={language}
                    includeStopWords={includeStopWords}
                    setDivColor={setDivColor}
                />
            </div>
            <hr />
            <div style={divColor.postag}>
                <PosTag
                    textInput={textInput}
                    setOutput={setOutput}
                    setArray={setArray}
                    language={language}
                    includeStopWords={includeStopWords}
                    setDivColor={setDivColor}
                />
            </div>
            <hr />
            <div style={divColor.BagOfWords}>
                <BagOfWords
                    textInput={textInput}
                    setOutput={setOutput}
                    setArray={setArray}
                    language={language}
                    includeStopWords={includeStopWords}
                    setDivColor={setDivColor}
                />
            </div>
            <hr />
        </div>
    )
}
