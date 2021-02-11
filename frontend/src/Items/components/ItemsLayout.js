import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListItems from './ListItems'
import {getItemsFront} from '../services'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const ItemsLayout = (props) => {
    const [items, setItems] = useState([])
    let query = useQuery();


    useEffect(() => {
        async function getData () {
          const response = await getItemsFront(query.get('q'))
          if(response.status===200){
            setItems(response.data.items)
            }
        };
        getData();
      }, [query.get('q')]);


   
    //console.log(getItemsFront('xiaomi'))
    //setItems(resp.data.items)
    return (
        <>
            <SearchBar />
          
            
             <ListItems listaItems={items}/>   
            
            
            
        </>
    )
}

export default ItemsLayout