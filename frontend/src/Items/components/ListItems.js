import React,{useState, useEffect} from 'react'
import {getItemsFront} from '../services'

const ListItems = ({listaItems}) => {
  

    return (
        <div>
            {
                listaItems.map(({id,title})=>(
                    <div>
                    {id}
                    </div>
                ))
            }
        </div>    
    )
}

export default ListItems