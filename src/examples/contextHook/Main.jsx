import React from 'react'
import {useAlert} from "./AlertContext";

const Main = () => {

    const {toggleAlert} = useAlert()

    return (
        <div>
            <h4>Look this alert, with help Context</h4>
            <button
                className='btn btn-success btn-sm'
                onClick={toggleAlert}>Show Alert
            </button>
        </div>
    )
}

export default Main