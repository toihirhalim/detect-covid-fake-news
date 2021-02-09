import React, { useState } from 'react'
import graphQlApi from '../../api/graphQL'
import '../styles.css'


export default function Tokenize({ textInput, setOutput, setArray }) {
    const [language, setLanguage] = useState('arabic')
    const [tokenizeByWords, setTokenizeByWords] = useState(true)

    const tokenize = async e => {
        let query = `
            query {
                tokenize(text: "${textInput}",language: "${language}" words: ${tokenizeByWords})
            }
        `
        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.tokenize) {
            setArray(true)
            setOutput(data.tokenize)
        }
    }

    return (
        <div className="tokenization-container">
            <button onClick={tokenize}>Tokenize</button>
            <select onChange={e => { setLanguage(e.target.value); }}>
                <option value="arabic" selected>Arabic</option>
                <option value="english">English</option>
            </select>
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
