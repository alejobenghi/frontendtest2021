import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ListItems = ({listaItems}) => {
  

    return (
        
            <Route>
            <Container>
        
            
            {
                
                listaItems.map(({id,title,picture})=>(
                    <Link to={"/items/"+id}>
                    <Row>
                    <Col xs={6} md={4}>
                    <Image className="thumbnail" src={picture} rounded />
                     </Col>
                     <Col xs={6} md={4}>
                    {id},{title}
                    </Col>
                    </Row>
                    </Link>
                ))
                
            }
            </Container>
            </Route>
            
            
    )
}

export default ListItems