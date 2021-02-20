import React from 'react'
import graphQlApi from '../../api/graphQL'
import '../nlp.css'

export default function PosTag({ textInput, setOutput, setArray, language, includeStopWords, setDivColor }) {

    const getPosTags = async e => {
        let query = `
            query {
                posTag(text: "${textInput}",language: "${language}", stopWords: ${includeStopWords})
            }
        `
        setDivColor({ postag: { 'backgroundColor': 'rgb(183, 185, 187)' } })
        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.posTag) {
            setArray(false)
            setOutput(data.posTag)
        }
    }

    return (
        <div className="option">
            <button className="options-btn" onClick={getPosTags}>pos-tags</button>
        </div>
    )
}
