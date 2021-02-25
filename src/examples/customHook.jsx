import React, {useState, useEffect} from 'react'

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange, type: 'text',},
        value,
        clear
    }
}

const CustomHook = () => {

    const NameInput = useInput('')
    const LastNameInput = useInput('')

    useLogger(NameInput.value)
    useLogger(LastNameInput.value)

    const ClearField = () => {
        NameInput.clear()
        LastNameInput.clear()
    }

    return (
        <div className='bg-light p-3'>
            <h4>Custom Hooks</h4>
            <input {...NameInput.bind} placeholder={'Name'} className='m-3'/>
            <input {...LastNameInput.bind} placeholder={'Last Name'} className='mb-3'/>
            <hr/>
            <p className='text-primary'>Name: {NameInput.value}</p>
            <p className='text-primary'>Last Name: {LastNameInput.value}</p>
            <hr/>
            <button onClick={ClearField} className='btn btn-danger'>Clear Fields</button>
        </div>
    )
}
export default CustomHook