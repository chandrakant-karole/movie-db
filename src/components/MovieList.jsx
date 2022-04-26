import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {IoSearchSharp} from 'react-icons/io5'
export default function MovieList() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="my-4">
                        <div className='searchDiv1'>
                            <div className='inputWrapper'>
                                <input type="text" placeholder="search movies..." />
                                <IoSearchSharp />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <a href="/">Details</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <a href="/">Details</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <a href="/">Details</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
