import React,{ useState } from 'react'
import './items.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    
    return(
        <div className="searchContainer">
                <input
                    name="search"
                    label="Search And Higlight"
                    placeholder="Nunca dejes de buscar"
                    className="searchField"
                    onChange={handleChange}
                    color="secondary"
                />

                <Route>
                    <Link to={"/items?q="+searchValue}>Buscar</Link>
                </Route>
            
        </div>
    )
}

export default SearchBar