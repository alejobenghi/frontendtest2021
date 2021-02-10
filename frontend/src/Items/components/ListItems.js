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
        
            
            
                <Row>
                    <Col xs={12} md={8}>
                        <p className="categ">Electronica, Audio y Video &gt; iPod &gt; Reproductores iPod touch &gt; 32 GB</p>
                     </Col>
                </Row>
            
            {
                listaItems.map(({id,title,picture,price})=>(
                    <Link style={{ textDecoration: 'none' }} to={"/items/"+id}>
                    <Row className="rowResult">
                    <Col xs={6} md={2}>
                    <Image className="thumbnail" src={picture} rounded />
                     </Col>
                     <Col xs={6} md={8}>
                        <h3>$  {price.amount}</h3>
                        <p>{title}</p>
                    </Col>
                    <Col md={2}>
                        
                        <p className="localidad">Capital Federal</p>
                    </Col>
                    </Row>
                    <Row className="rowLine">
                        <Col>
                        <hr  style={{
                            backgroundColor: '#EEEEEE',
                            height: 1,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 0,
                            marginBottom: 0
                        }}/>
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