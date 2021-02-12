import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'

const DetailItem = (props) => {
  
    

    return (
        
        <>
    
        
        
            <Row>
                <Col md={1}>
                </Col>
                <Col xs={12} md={10}>
                    <p className="categ">{props.propCategory.name}</p>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
        
        
            <Row >
                <Col md={1}>
                </Col>
                <Col className="rowResult" xs={12} md={7}>
                    <div className="conImage">
                        <Image className="thumbnailDetail" src={props.propItem.picture} rounded />
                    </div>
                 </Col>
                 <Col className="rowResult" style={{paddingRight:32}} xs={12} md={3}>
                     <p className="conditionSold">{props.propItem.condition} - {props.propItem.sold_quantity} vendidos</p>
               
                    <p className="titleDetail">{props.propItem.title}</p>
                    <span className="price">$  {props.propPrice.amount}</span><span className="decimals">{props.propPrice.decimals}</span>
                    <Button className="button" variant="primary">Comprar</Button>
                </Col>
                <Col md={1}>
                </Col>
               
            </Row>
            <Row >
                <Col md={1}>
                </Col>
                <Col className="rowResult" md={10}>
                
                <h3 className="descProd">Descripción del producto</h3>
                <p className="description">{props.propItem.description}</p>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
                
            
            
        </>
        
        

    )
}

export default DetailItem