import React from 'react'
import graphQlApi from '../../api/graphQL'
import '../nlp.css'

export default function BagOfWords({ textInput, setOutput, setArray, language, includeStopWords, setDivColor }) {

    const getBagsOfWords = async e => {
        let query = `
            query {
                bagOfWords(text: "${textInput}",language: "${language}", stopWords: ${includeStopWords})
            }
        `
        setDivColor({ BagOfWords: { 'backgroundColor': 'rgb(183, 185, 187)' } })
        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.bagOfWords) {
            setArray(true)
            setOutput(data.bagOfWords)
        }
    }
    return (
        <div className="option">
            <button className="options-btn" onClick={getBagsOfWords}>BagOfWords</button>
        </div>
    )
}
