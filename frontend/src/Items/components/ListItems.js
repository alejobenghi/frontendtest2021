import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import free from '../../img/ic_shipping.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ListItems = (props) => {
    var cadCategoriesName = ""
   
    props.propCategoriesName.map((name) =>
            cadCategoriesName += name + " > "
    )
    cadCategoriesName = cadCategoriesName.slice(0,-3)
      
    return (
        
        <Route>
            <Container>
            
                <Row>
                    <Col xs={12} md={8}>
                        <p className="categ">
                           &nbsp;
                            {
                               cadCategoriesName
                            
                            }
                            
                        </p>
                    </Col>
                </Row>
            
                {
                props.propItems.map(({id,title,picture,price,free_shipping})=>(
                    <Link key={id} style={{ textDecoration: 'none' }} to={"/items/"+id}>
                        <Row className="rowResult">
                            <Col xs={6} md={2}>
                                <div className="contThumbnail">
                                    <Image className="thumbnail" src={picture} rounded />
                                </div>
                            </Col>
                            <Col xs={6} md={8}>
                                <span className="title">{price.amount}</span>
                                {free_shipping?(
                                    <img className="shipping" src={free} alt="shipping" />
                                ):(
                                    <div></div>
                                )

                                }
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