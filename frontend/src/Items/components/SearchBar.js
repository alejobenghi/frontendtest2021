import React,{ useState } from 'react'
import logo from '../../img/Logo_ML.png';
import ic_search from '../../img/ic_Search.png';

import {Container, Row, Col} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    useHistory,
    Route,
    Link
  } from "react-router-dom";



const SearchBar = () => {

    let history = useHistory();
    const [searchValue, setSearchValue] = useState('')
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleKeyPress = (event) => {
        if(event.charCode==13){
            history.push("/items?q="+searchValue)
          }
    }
    
    return(
        <Container fluid className="contBarra">
            <Row>
                <Col md={1} ></Col>
                <Col md={1} xs={2}>
                    <img className="logo" src={logo} alt="Logo" />
                </Col>
                <Col md={9}  xs={10}>
                    <input
                        name="search"
                        label="Search And Higlight"
                        placeholder="Nunca dejes de buscar"
                        className="searchField"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
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
                <Col md={1}></Col>
            </Row>
        </Container>
    )
}

export default SearchBar