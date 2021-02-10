import React, { useState, useEffect } from 'react'
import './items.scss'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import {getItemByIdFront} from '../services'
import {
    useParams
  } from "react-router-dom";


const ItemLayout = (props) => {
    const [item, setItem] = useState([])
    let { id } = useParams();


    useEffect(() => {
        async function getData () {
          const response = await getItemByIdFront(id)
          if(response.status===200){
            setItem(response.data.item)
            }
        };
        getData();
      }, []);


   
    //console.log(getItemsFront('xiaomi'))
    //setItems(resp.data.items)
    return (
        <>
            <SearchBar />
          
            
             <ListItem listaItem={item}/>   
            
            
            
        </>
    )
}

export default ItemLayout