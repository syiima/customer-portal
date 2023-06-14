import React from 'react'
import { Card, Col, Row} from 'reactstrap'

import "./Components.css"

export const UserCard = (props) => {
    return(
        <Card body className='mb-3 card-size'>
        <Row className='justify-content-between-align-items-center ms-2'>
            <Col sm={1}> 
                <img src={props.data.avatar} alt="Avatar" className='avatar-img' /> 
            </Col>
            <Col sm={4}>
                <p>First Name: {props.data.first_name}</p>
                <p>Last Name: {props.data.last_name}</p>
                <p>Email Name: {props.data.email}</p>
            </Col>
        </Row>
    </Card>
    )
}