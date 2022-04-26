import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { IoSearchSharp } from 'react-icons/io5'
export default function Home() {
    return (
        <>
            <section className='home_bg'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4}>
                            <div className='searchDiv'>
                                <div className='inputWrapper'>
                                    <input type="text" placeholder="search movies..." />
                                    <IoSearchSharp />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
