import React from 'react'
import ItemDetail from './ItemDetail'
import { useSelector } from 'react-redux'

function ItemList() {
    const { items } = useSelector(state => state)
    return (
        <div className='container'> 
            <div className='row'>
                {
                   items && 
                   items.map((item) => <ItemDetail item={item} key={item.id}/>)
                }
            </div>
            
        </div>
    )
}

export default ItemList

