import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav,Form,FormControl, Button } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="/">
                <img
                src="/img/logo-clip.png"
                width="70"
                height="50"
                alt="React Boostrap logo"
                className="d-inline-block align-center">
                </img>
                
               <strong>Wiki-Clip</strong> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <NavDropdown title="Aplicativos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">GoAnywhere</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Presto</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Enforcive</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Aldon</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">X-Analysis</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Servidores" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">IBM i</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Windows Server</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Linux</NavDropdown.Item>
                        </NavDropdown>
                        
                           <Nav.Link href="/KnowedgeBase">Base de Conocimientos</Nav.Link>
                
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
