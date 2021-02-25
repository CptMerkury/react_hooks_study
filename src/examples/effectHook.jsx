import React, {useState, useEffect} from 'react'
import * as axios from "axios";

const EffectHook = () => {

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    const mouseMoveHandler = (event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
        console.log(event.clientX, event.clientY)
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${type}?_start=0&_limit=3`)
            .then(response => setData(JSON.stringify(response.data, null, 2)))
    }, [type])

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div className='paragraph bg-light p-3'>
            <h3>Response: {type}</h3>
            <span>
                <p>X : {pos.x}</p>
                <p>Y : {pos.y}</p>
            </span>
            <button onClick={() => setType('users')} className='btn btn-sm btn-primary'>Users</button>
            <button onClick={() => setType('todos')} className='btn btn-sm btn-success m-2'>Todo</button>
            <button onClick={() => setType('posts')} className='btn btn-sm btn-warning'>Posts</button>
            <pre>{data}</pre>
        </div>
    )
}
export default EffectHook