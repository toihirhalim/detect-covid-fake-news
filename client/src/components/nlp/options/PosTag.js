import React from 'react'
import graphQlApi from '../../api/graphQL'
import '../nlp.css'

export default function PosTag({ textInput, setOutput, setArray }) {

    const getPosTags = async e => {
        let query = `
            query {
                posTag(text: "${textInput}")
            }
        `

        setOutput(null)
        const data = await graphQlApi(query)

        if (data && data.posTag) {
            setArray(false)
            setOutput(data.posTag)
        }
    }

    return (
        <div className="pos-tag-container">
            <button className="options-btn" onClick={getPosTags}>pos-tags</button>
        </div>
    )
}
