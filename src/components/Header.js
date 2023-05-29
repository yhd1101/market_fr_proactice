import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={"/"}>Korean Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">중고거래</Nav.Link>
                            <Nav.Link href="#memes">
                                구인구직
                            </Nav.Link>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">프로필</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        장바구니
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">약속시간</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        로그아웃
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ): (
                                <>
                                    <Nav.Link  href={"/signup"}>
                                        회원가입
                                    </Nav.Link>
                                    <Nav.Link href={"/login"}>
                                        로그인
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;