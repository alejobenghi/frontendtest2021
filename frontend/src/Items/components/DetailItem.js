import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'

const DetailItem = (props) => {
  
    

    return (
        
        <Container>
    
        
        
            <Row>
                <Col xs={12} md={8}>
                    <p className="categ">{props.propCategory.name}</p>
                 </Col>
            </Row>
        
        
                <Row className="rowResult">
                <Col xs={6} md={8}>
                    <div className="conImage">
                        <Image className="thumbnailDetail" src={props.propItem.picture} rounded />
                    </div>
                 </Col>
                 <Col xs={6} md={4}>
                     <p className="conditionSold">{props.propItem.condition} - {props.propItem.sold_quantity} vendidos</p>
               
                    <p className="titleDetail">{props.propItem.title}</p>
                    <span className="price">$  {props.propPrice.amount}</span><span className="decimals">{props.propPrice.decimals}</span>
                    <Button className="button" variant="primary">Comprar</Button>
                </Col>
               
                </Row>
                <Row className="rowResult">
                <h3 className="descProd">Descripción del producto</h3>
                <p className="description">{props.propItem.description}</p>
                </Row>
                
            
            
        
        </Container>
        

    )
}

export default DetailItem