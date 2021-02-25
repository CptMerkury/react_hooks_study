import React, {useState} from 'react'
import {useAlert} from "./AlertReducer";

const Main = () => {

    const alert = useAlert()

    const [text, setText] = useState('Hash!!')

    const getText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <h4>Write you custom alert</h4>
            <input type="text" className='form-control' onChange={getText} placeholder={'Write here'}/>
            <button
                className='btn btn-success btn-sm m-3'
                onClick={() => alert.show(text)}>Show Alert
            </button>
        </div>
    )
}

export default Main