import React, {useEffect, useState} from 'react';
// import axios from "axios";
import {Button, Form} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/userActions";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate("/")
        }
    }, [navigate, userInfo])

    const loginHandler = async (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }


    // const loginHandler = async (e) => {
    //     e.preventDefault() //이걸 설정안해주면 무한반복
    //     try {
    //         const userInput ={ //사용자가 던져주는 값
    //             email,password
    //         }
    //
    //         const result = await axios.post("http://localhost:9000/user/login",userInput)
    //
    //         console.log("+++++++++++++++++++++", result)
    //     } catch (err){
    //         console.log(err)
    //     }
    //
    //
    //
    // }


    return (
        <FormContainer title={"Login"}>
            <Form className={"mt-5"} onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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

export default Login;