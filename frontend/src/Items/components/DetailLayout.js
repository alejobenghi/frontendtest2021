import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import DetailItem from './DetailItem'
import {getItemByIdFront, getCategoryByIdFront} from '../services'
import {
    useParams
  } from "react-router-dom";


const DetailLayout = () => {
    const [item, setItem] = useState([])
    const [price, setPrice] = useState([])
    const [category, setCategory] = useState([])
    let { id } = useParams();


    useEffect(() => {
        async function getData () {
            const response = await getItemByIdFront(id)
            if(response.status===200){
                setItem(response.data.item)
                setPrice(response.data.item.price)
            }
            const response2 = await getCategoryByIdFront(response.data.item.category_id)
            if(response2.status===200){
                setCategory(response2.data)
            }
        };
        getData();
    },[]);


    let props = {
        propItem : item,
        propPrice : price,
        propCategory: category
    }
   
    return (
        <>
            <SearchBar />
          
            
             <DetailItem {...props}/>   
            
            
            
        </>
    )
}

export default DetailLayout