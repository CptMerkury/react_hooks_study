import React, {useEffect, useState} from 'react'

const ItemList = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = props.getItems
        setItems(newItems)
        console.log('render')
    }, [props.getItems])

    return (
        <ul className='list-group p-2'>
            {items.map(i => (<li className='list-group-item' key={i}>{i}</li>))}
        </ul>
    )
}

export default ItemList