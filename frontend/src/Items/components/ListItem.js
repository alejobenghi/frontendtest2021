import React,{useState, useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const ListItem = ({listaItem}) => {
  

    return (
        
        <Container>
    
        
        
            <Row>
                <Col xs={12} md={8}>
                    <p className="categ">Electronica, Audio y Video &gt; iPod &gt; Reproductores iPod touch &gt; 32 GB</p>
                 </Col>
            </Row>
        
        
                <Row className="rowResult">
                <Col xs={6} md={9}>
                <div className="contThumbnailDetail">
                <Image className="thumbnailDetail" src={listaItem.picture} rounded />
                </div>
                 </Col>
                 <Col xs={6} md={3}>
                    <span className="titleDetail">{listaItem.amount}</span>
                   

                    
                    <p>{listaItem.title}</p>
                </Col>
               
                </Row>
                
            
            
        
        </Container>
        

    )
}

export default ListItem