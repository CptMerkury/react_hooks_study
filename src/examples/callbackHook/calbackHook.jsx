import React, {useState, useCallback, useMemo} from 'react'
import ItemList from "./itemList";

const CallbackHook = () => {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState(false)

    const styles = useMemo(() => ({
        color: color ? 'crimson' : 'dodgerblue'
    }), [color])

    const generateElementAPI = useCallback(() => {
        return new Array(count).fill('').map((item, idx) => `Element #${idx + 1}`)
    }, [count])

    return (
        <div className='bg-light p-3'>
            <h3 style={styles}>Count elements : {count}</h3>
            <button
                className='btn btn-sm btn-success m-1'
                onClick={() => setCount(prev => prev + 1)}>Add
            </button>
            <button
                className='btn btn-sm btn-warning m-1'
                onClick={() => setColor(prev => !prev)}>Change
            </button>
            <ItemList getItems={generateElementAPI}/>
        </div>
    )
}
export default CallbackHook