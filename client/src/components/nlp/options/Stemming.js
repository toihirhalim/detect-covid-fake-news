import React, { useState } from 'react'
import graphQlApi from '../../api/graphQL'
import '../nlp.css'

export default function Stemming({ textInput, setOutput, setArray, language, includeStopWords, setDivColor }) {
    const [lancaster, setLancaster] = useState(true)

    const stem = async e => {
        let query = `
            query {
                stemming(text: "${textInput}", language: "${language}", lancaster: ${lancaster}, stopWords: ${includeStopWords})
            }
        `
        setDivColor({ stemming: { 'backgroundColor': 'rgb(183, 185, 187)' } })
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
