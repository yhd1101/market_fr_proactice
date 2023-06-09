import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])


    const getProducts = async () => {
        try {

            const result = await axios.get("http://localhost:9000/product/")
            // console.log(result.data.products)

            setProducts(result.data.products)
            console.log(result.data.products)
        } catch (err){
            console.log(err)
        }

    }

    useEffect(() => {
        getProducts()
    }, [])



    return (
        <Container className={"mt-5"}>
            <Row>
                {products && products.map(product => (
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{height: '250px', width: '100%'}} src={product.picture} />
                            <Card.Body>
                                <Card.Title>{product.name.slice(0,15)}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button onClick={() => navigate(`/product/${product._id}`)}>Go Detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Main;
