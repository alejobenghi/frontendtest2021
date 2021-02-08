import React, { useState } from 'react'
import './items.scss'
import SearchBar from './SearchBar'
import ListItems from './ListItems'
import {getItemsFront} from '../services'

const ItemsLayout = () => {
    const [items, setItems] = useState([])

    const handleSubmit = async (searchText) => {
        const response = await getItemsFront(searchText)

        if(response.status===200){
            setItems(response.data.items)
        }
    }

    return (
        <>
            <SearchBar handleSubmit={handleSubmit}/>
           {
                !items.length &&(
                    <h3>
                        No se encontraron resultados
                    </h3>
                ) 
                
           }
            {
             items.length && <ListItems listaItems={items}/>   
            }
            
            
        </>
    )
}

export default ItemsLayout