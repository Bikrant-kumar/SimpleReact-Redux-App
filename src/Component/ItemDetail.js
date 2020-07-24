import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteItem,editItem} from '../Store/Action/itemAction'

function ItemDetail({item}) {

    const dispatch = useDispatch();

    return (
        <div className="col s12 m6">
            <div className="card hoverable">
                <div className="card-content">
                    <span className="card-title"> {item.item} </span>
                    <p>{item.serving}</p>
                </div>
                <div className="card-action">
                    <button
                    onClick={()=>dispatch(deleteItem(item.id))}
                    className='btn red s6 offset-s6'>
                        Remove Item
                        <i className="material-icons right">delete</i>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail

