import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

const NavBar = ({ filterBySearch }) => {

    const [searchValue, setSearchValue] = useState('')

    const onSearch = () => {
        filterBySearch(searchValue)
        setSearchValue('')
    }

    return (
        <Row>
            <Navbar expand="lg" className="bg-dark" variant='dark'>
                <Container>
                    <div className='brand-color'>مطعم جديد</div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
                            <Form.Control
                                type="text"
                                placeholder="ابحث..."
                                className="mx-2"
                                aria-label="Search"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            <button type="submit" className="btn btn-light">بحث</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavBar