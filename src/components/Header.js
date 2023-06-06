import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userActions";
import { useTranslation } from "react-i18next";


const Header = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={"/"}>{t("MainTitle")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{t("selling")}</Nav.Link>
                            <Nav.Link href={"/job"}>
                                {t("Job")}
                            </Nav.Link>
                            <NavDropdown title="언어변환" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">한국어</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    일본어
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">중국어</NavDropdown.Item>
                            </NavDropdown>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">프로필</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        장바구니
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">약속시간</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        로그아웃
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ): (
                                <>
                                    <Nav.Link  href={"/signup"}>
                                        {t("Signup")}
                                    </Nav.Link>
                                    <Nav.Link href={"/login"}>
                                        {t("Login")}
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