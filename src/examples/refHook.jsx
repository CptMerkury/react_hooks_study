import React, {useState, useEffect, useRef} from 'react'

const RefHook = () => {

    const [text, setText] = useState('May the force be with you')
    const countRender = useRef(1)
    const prevValue = useRef('')
    const inputFocus = useRef(null)

    useEffect(() => {
        countRender.current++
    })

    useEffect(() => {
        prevValue.current = text
    }, [text])

    const focus = () => inputFocus.current.focus()

    return (
        <div className='bg-light p-3'>
            <p>Now message : {text}</p>
            <p>Previous message : {prevValue.current}</p>
            <input
                ref={inputFocus}
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className='form-control mb-1'
            />
            <h6>Rerender : {countRender.current}</h6>
            <div>
                <button onClick={focus} className='btn btn-sm btn-warning'>Input Focus</button>
            </div>
        </div>
    )
}
export default RefHook