import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListItems from './ListItems'
import {getCategoryByIdFront, getItemsFront} from '../services'
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const ItemsLayout = () => {
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    let query = useQuery();

    let lisCategories = new Array();

    //Hook para obtener resultados de items e id de categorias
    useEffect(() => {
        async function getData () {
            const response = await getItemsFront(query.get('q'))
            if(response.status===200){
                setItems(response.data.items)
                setCategories(response.data.categories)
            
            }

        };
        getData();
    }, [query.get('q')]);

    //Hook para consultar API de mercado libre y obtener nombres de categorias
    var categoriesNames = new Array()
    categories.map(({category_id})=> {
        async function getCategories() {
            const response2 = await getCategoryByIdFront(category_id)
            if(typeof response2 !== 'undefined'){
                if(response2.status===200){
                    categoriesNames.push(response2.data.name)
                }
            }

        };
        getCategories();
    })

    let props = {
        propItems : items,
        propCategories: categories,
        propCategoriesName: categoriesNames
    }
   

   
    return (
        <>
            <SearchBar />
          
            
             <ListItems {...props}/>   
            
            
            
        </>
    )
}

export default ItemsLayout