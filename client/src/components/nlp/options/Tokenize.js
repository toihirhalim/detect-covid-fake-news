import React, { useState } from 'react'
import graphQlApi from '../../api/graphQL'
import '../nlp.css'


export default function Tokenize({ textInput, setOutput, setArray, language, includeStopWords, setDivColor }) {

    const [tokenizeByWords, setTokenizeByWords] = useState(true)

    const tokenize = async e => {

        let query = `
            query {
                tokenize(text: "${textInput}",language: "${language}" words: ${tokenizeByWords}, stopWords: ${includeStopWords})
            }
        `
        setDivColor({ tokenize: { 'backgroundColor': 'rgb(183, 185, 187)' } })

        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.tokenize) {
            setArray(true)
            setOutput(data.tokenize)
        }
    }

    return (
        <div className="option">
            <button className="options-btn" onClick={tokenize}>Tokenize</button>
            <div>
                <label>
                    words
                    <input className="radio-btn" type="radio" value="true" name="method" checked={tokenizeByWords} onChange={e => setTokenizeByWords(e.target.value === 'true')} />
                </label>
                <label>
                    <input className="radio-btn" type="radio" value="false" name="method" checked={!tokenizeByWords} onChange={e => setTokenizeByWords(e.target.value === 'true')} />
                    sentences
                </label>

            </div>
        </div>
    )
}
