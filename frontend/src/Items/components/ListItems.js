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
            
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col xs={12} md={10}>
                        <p className="categ">
                           &nbsp;
                            {
                               cadCategoriesName
                            
                            }
                            
                        </p>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            
                {
                props.propItems.map(({id,title,picture,price,free_shipping})=>(
                    <Link key={id} style={{ textDecoration: 'none' }} to={"/items/"+id}>
                        <Row >
                            <Col md={1}>
                            </Col>
                            <Col className="rowResult" style={{paddingTop:16}} xs={6} md={2}>
                                <div className="contThumbnail">
                                    <Image className="thumbnail" src={picture} rounded />
                                </div>
                            </Col>
                            <Col className="rowResult"  style={{paddingTop:32}} xs={6} md={6}>
                                <span className="title">{price.amount}</span>
                                {free_shipping?(
                                    <img className="shipping" src={free} alt="shipping" />
                                ):(
                                    <div></div>
                                )

                                }
                                <p>{title}</p>
                            </Col>
                            <Col className="rowResult"  style={{paddingTop:16}} md={2} >
                                <p className="localidad">Capital Federal</p>
                            </Col>
                            <Col md={1}>
                            </Col>
                        </Row>
                        <Row >
                            <Col md={1}>
                            </Col>
                            <Col className="rowResult">
                                <hr  style={{
                                    backgroundColor: '#EEEEEE',
                                    height: 1,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginTop: 0,
                                    marginBottom: 0
                                }}/>
                            </Col>
                            <Col md={1}>
                            </Col>
                        </Row>
                    </Link>
                ))
                
            }
        </Route>
            
            
    )

}

export default ListItems