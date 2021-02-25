import React, {useState, useMemo} from 'react'

const complexVeryHardCopmuted = (num) => {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

const MemoHook = () => {

    const [number, setNumber] = useState(42)
    const [color, setColor] = useState(false)

    const compute = useMemo(() => {
        return complexVeryHardCopmuted(number)
    }, [number])

    const styles = useMemo(() => ({
        color: color ? 'crimson' : 'dodgerblue'
    }), [color])

    return (
        <div className='bg-light p-3'>
            <h3 style={styles}>State number : {number}</h3>
            <h5>Equals number : {compute}</h5>
            <button
                className='btn btn-sm btn-success m-1'
                onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button
                className='btn btn-sm btn-danger m-1'
                onClick={() => setNumber(prev => prev - 1)}>Take Away</button>
            <button
                className='btn btn-sm btn-warning m-1'
                onClick={() => setColor(prev => !prev)}>Change Color</button>
        </div>
    )
}
export default MemoHook