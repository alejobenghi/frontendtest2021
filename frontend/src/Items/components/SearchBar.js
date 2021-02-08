import React,{ useState } from 'react'
import './items.scss';



const SearchBar = ({handleSubmit}) => {

    const [searchValue, setSearchValue] = useState('')
    const handleChange = (event) => {
        const { name, value} = event.target
        setSearchValue({searchValue,[name]:value})
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit(searchValue)
    }
    return(
        <div className="searchContainer">
            <form onSubmit={_handleSubmit}>
                <input
                    name="search"
                    label="Search And Higlight"
                    placeholder="Nunca dejes de buscar"
                    className="searchField"
                    onChange={handleChange}
                    color="secondary"
                />
                <input 
                    type="submit"
                />
            </form>
        </div>
    )
}

export default SearchBar