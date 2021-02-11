import React, { useState, useEffect } from 'react'
import '../sentFake.css'
import graphQlApi from '../../api/graphQL'

export default function FakeNews() {
    const [text, setText] = useState("")
    const [result, setresult] = useState('')
    let colors = ['rgb(33, 112, 9)', 'red'];
    const [color, setColor] = useState({ color: colors[0], 'marginLeft': '15px' })

    const analyse = async e => {
        e.preventDefault()

        setresult('')

        let query = `
            query{
                fakeNews(text: "${text}")
            }
        `

        const data = await graphQlApi(query)

        if (data && data.fakeNews) {
            setresult(data.fakeNews)
        }
    }

    useEffect(() => {
        let colors = ['rgb(33, 112, 9)', 'red'];
        if (result) {
            if (result === 'TRUE') {
                setColor({ color: colors[0], 'marginLeft': '15px' })
            } else if (result === 'FAKE') {
                setColor({ color: colors[1], 'marginLeft': '15px' })
            } else {
                setresult('')
            }
        }
    }, [result])

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
                <div className="sent-fake-result-container">
                    <p className="sent-fake-result-p">
                        result :
                        <strong style={color}>{result && result}</strong>
                    </p>
                </div>

            </div>

        </div>
    )
}
