import React, { useState } from 'react'
import '../sentFake.css'
import graphQlApi from '../../api/graphQL'

export default function FakeNews() {
    const [text, setText] = useState("")
    const [result, setresult] = useState()

    const analyse = async e => {
        e.preventDefault()

        let query = `

        `

        const data = await graphQlApi(query)

        if (data) {
            setresult(data)
        }
    }
    return (
        <div className="fake-container">
            <h3>Fake News</h3>
            <div className="sent-fake-main">
                <div>
                    <p>enter text here :</p>
                    <textarea value={text} cols="30" rows="8" onChange={e => setText(e.target.value)} />
                </div>
                <div >
                    <button className="sent-fake-btn" onClick={analyse}>Analyse</button>
                </div>
                <div>

                </div>

            </div>

        </div>
    )
}
