import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signup} from "../actions/userActions";

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fourteenOver, setFourteenOver] = useState(true)
    const [agreeOfTerm, setAgreeOfTerm] = useState(true) //약관동의
    const [agreeOfPersonalInfo, setAgreeOfPersonalInfo] = useState(true)

    const userSignup = useSelector((state) => state.userSignup)
    const { loading, success, error} = userSignup

    useEffect(() => {
        if(success){
            navigate("/login")
        }
    }, [navigate, success])

    const signupHandler = async (e) => {
        e.preventDefault()
        if (!fourteenOver || !agreeOfTerm || !agreeOfPersonalInfo){
            alert("필수값을 체크하세요")
            return
        }
        dispatch(signup(name, email, password))
    }

    // const signupHandler = async (e) => {
    //     e.preventDefault()
    //     console.log(agreeOfTerm)
    //     console.log(fourteenOver)
    //     try{
    //         const userInput = {
    //             name, email, password
    //         }
    //         const result = await axios.post("http://localhost:9000/user/signup", userInput)
    //         console.log("++++++++++++++++++++",result)
    //     } catch (err){
    //         console.log(err)
    //     }
    //
    // }


    return (
        <FormContainer title={"회원가입"}>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : null}
            {error ? (
                <Alert variant={"danger"}>
                    {error}
                </Alert>
            ) : null}
            <Form className={"mt-5"} onSubmit={signupHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                       필수입력 항목입니다.
                    </Form.Text>
                </Form.Group>
                <div className={"d-grid gap-2 mb-3"}>
                    <Button variant="primary" size="lg" active>
                        인증하기
                    </Button>
                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <h4>약관동의</h4>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <div key={"checkbox"} className="mb-3">
                                <Form.Check type={"checkbox"} id={`check-api-${"checkbox"}`}>
                                    <Form.Check.Input type={"checkbox"} isValid />
                                    <Form.Check.Label><b>{`전체동의 ${""}`}</b></Form.Check.Label>

                                </Form.Check>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Form.Check.Label>{`선택항목에 대한 동의 포함 ${""}`}</Form.Check.Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={3}>
                            <div key={"checkbox"} className="mb-3">
                                <Form.Check type={"checkbox"} id={`check-api-${"checkbox"}`}>
                                    <Form.Check.Input
                                        type={"checkbox"}
                                        isValid
                                        checked={fourteenOver}
                                        // onChange={e => setFourteenOver(!fourteenOver)}
                                        onChange={setFourteenOver}
                                    />
                                    <Form.Check.Label><b>{`만 14세입니다. ${""}`}</b></Form.Check.Label>
                                </Form.Check>
                            </div>
                        </Col>

                        <Col xs={7}>
                            <Form.Check.Label>{`(필수) ${""}`}</Form.Check.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <div key={"checkbox"} className="mb-3">
                                <Form.Check type={"checkbox"} id={`check-api-${"checkbox"}`}>
                                    <Form.Check.Input
                                        type={"checkbox"}
                                        isValid
                                        checked={agreeOfTerm}
                                        // onChange={e => setAgreeOfTerm(!agreeOfTerm)}
                                        // onChange={setAgreeOfTerm}
                                    />
                                    <Form.Check.Label><b>{`이용약관. ${""}`}</b></Form.Check.Label>
                                </Form.Check>
                            </div>
                        </Col>


                        <Col xs={6}>
                            <Form.Check.Label>{`(필수). ${""}`}</Form.Check.Label>
                        </Col>
                    </Row>
                </Container>





                <div key={"checkbox"} className="mb-3">
                    <Form.Check type={"checkbox"} id={`check-api-${"checkbox"}`}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>{`개인정보수집 및 이용동의. ${""}`}</Form.Check.Label>
                        <Form.Control.Feedback type="valid">
                            You did it!
                        </Form.Control.Feedback>
                    </Form.Check>
                </div>

                <div key={"checkbox"} className="mb-3">
                    <Form.Check type={"checkbox"} id={`check-api-${"checkbox"}`}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>{`개인정보 마케팅 활용 동의 ${""}`}</Form.Check.Label>
                        <Form.Control.Feedback type="valid">
                            You did it!
                        </Form.Control.Feedback>
                    </Form.Check>
                </div>
                <div key={"checkbox"} className="mb-3">
                    <Form.Check type={"checkbox"} id={`check-api-${"checkbox"}`}>
                        <Form.Check.Input type={"checkbox"} isValid />
                        <Form.Check.Label>{`이벤트, 쿠폰, 특가, 알림 메일 수신동의 ${""}`}</Form.Check.Label>
                        <Form.Control.Feedback type="valid">
                            You did it!
                        </Form.Control.Feedback>
                    </Form.Check>
                </div>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Signup;
