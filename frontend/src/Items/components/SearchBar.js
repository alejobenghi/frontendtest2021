import React,{ useState } from 'react'
import logo from '../../img/Logo_ML.png';
import ic_search from '../../img/ic_Search.png';

import {Container, Row, Col} from 'react-bootstrap'
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
        <Container fluid className="contBarra">
            <Row>
                <Col sm={1}></Col>
                <Col sm={1}>
                    <img className="logo" src={logo} alt="Logo" />
                </Col>
                <Col sm={9}>
                    <input
                        name="search"
                        label="Search And Higlight"
                        placeholder="Nunca dejes de buscar"
                        className="searchField"
                        onChange={handleChange}
                        color="secondary"
                    />

                    <Route>
                        <Link to={"/items?q="+searchValue}>
                            <span className="conSearch">
                                <img src={ic_search} alt="Logo" />
                            </span>        
                    
                        </Link>
                    </Route>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    )
}

export default SearchBar