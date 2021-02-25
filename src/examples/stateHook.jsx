import React, {useState, useEffect} from 'react'

const StateHook = () => {

    const getCurrentTime = () => {
        return new Date().toTimeString().replace(/ .*/, '');
    }

    const computeInitialState = () => {
        return Math.trunc(Math.random() * 250)
    }

    const [counter, setCounter] = useState(() => {
        return computeInitialState()
    })

    const [state, setState] = useState({
        title: 'Local Time',
        date: getCurrentTime(),
        withJSON: false
    })

    const increment = () => {
        setCounter((prevState) => {
            return prevState + 1
        })
    }

    const decrement = () => {
        setCounter((prev) => prev - 1)
    }

    const toggleWithJson = () => {
        setState((prev) => {
            return {
                ...prev,
                withJSON: !prev.withJSON
            }
        })
    }

    useEffect(() => {
        const timerID = setInterval(() => {
            setState((prev) => {
                return {
                    ...prev,
                    date: getCurrentTime()
                }
            })
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    })

    return (
        <div className='paragraph bg-light p-3'>
            <h3 className='text-secondary mb-1'>Random Counter: {counter}</h3>
            <button className='btn-success btn btn-sm' onClick={increment}>Increment</button>
            <button className='btn-danger btn btn-sm m-2' onClick={decrement}>Decrement</button>
            <button className='btn-warning btn btn-sm' onClick={toggleWithJson}>to JSON</button>
            <h4 className='text-primary mb-0 '>{state.title}</h4>
            <p className='timer'>{state.date}</p>
            {!state.withJSON
                ? null
                : <pre>{JSON.stringify(state, null, 2)}</pre>
            }
        </div>
    )
}
export default StateHook