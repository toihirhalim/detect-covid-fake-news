import React, { useState } from 'react'
import graphQlApi from '../../api/graphQL'
import '../styles.css'

export default function Stemming({ textInput, setOutput, setArray }) {
    const [language, setLanguage] = useState('arabic')
    const [lancaster, setLancaster] = useState(true)

    const stem = async e => {
        let query = `
            query {
                stemming(text: "${textInput}", language: "${language}", lancaster: ${lancaster})
            }
        `
        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.stemming) {
            setArray(false)
            setOutput(data.stemming)
        }

    }
    return (
        <div className="stemming-container">
            <button className="options-btn" onClick={stem}>Stem</button>
            <select onChange={e => { setLanguage(e.target.value); }}>
                <option value="arabic" selected>Arabic</option>
                <option value="english">English</option>
            </select>
            <div>
                {language !== 'arabic' &&
                    <div>
                        <label>
                            Lancaster
                                <input className="radio-btn" type="radio" value="true" name="algorithm" checked={lancaster} onChange={e => setLancaster(e.target.value === 'true')} />
                        </label>
                        <label>
                            <input className="radio-btn" type="radio" value="false" name="algorithm" checked={!lancaster} onChange={e => setLancaster(e.target.value === 'true')} />
                                Porter
                        </label>
                    </div>
                }
            </div>

        </div>
    )
}
