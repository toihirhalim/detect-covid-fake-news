import React from 'react'
import graphQlApi from '../../api/graphQL'
import '../styles.css'

export default function Lemmatizing({ textInput, setOutput, setArray }) {

    const lemmatize = async e => {
        let query = `
            query {
                lemmatizing(text: "${textInput}")
            }
        `

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
