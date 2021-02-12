import React from 'react'
import graphQlApi from '../../api/graphQL'
import '../nlp.css'

export default function Lemmatizing({ textInput, setOutput, setArray, language, includeStopWords, setDivColor }) {

    const lemmatize = async e => {
        let query = `
            query {
                lemmatizing(text: "${textInput}", language: "${language}", stopWords: ${includeStopWords})
            }
        `
        setDivColor({ lemmatizing: { 'backgroundColor': 'rgb(183, 185, 187)' } })
        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.lemmatizing) {
            setArray(false)
            setOutput(data.lemmatizing)
        }
    }

    return (
        <div className="lemmatzing-container">
            <button className="options-btn" onClick={lemmatize}>lemmatize</button>
        </div>
    )
}
