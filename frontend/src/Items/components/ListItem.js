import React,{useState, useEffect} from 'react'
import {getItemsFront} from '../services'

const ListItem = ({listaItem}) => {
  

    return (
        <div>
            {
                
                    <div key={listaItem.id}>
                    {listaItem.id},{listaItem.title}
                    </div>
                
            }
        </div>    
    )
}

export default ListItem