import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <Row>
            <Col sm='12' className='justify-content-center text-center'>
                <div className='title'>قائمة الطعام</div>
                <div className='d-flex justify-content-center'>
                    <p className='underline'></p>
                </div>
            </Col>
        </Row>
    )
}

export default Header