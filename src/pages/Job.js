import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Job = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])


    const getJobs =async () => {
        try {

            const result = await axios.get("http://localhost:9000/job/")

            setJobs(result.data.jobs)
            console.log(result.data.jobs)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getJobs()
    }, [])






    return (
        <Container className={"mt-5"}>
            <Row>
                {jobs && jobs.map(job => (
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{height: '250px', width: '100%'}} src={job.picture} />
                            <Card.Body>
                                <Card.Title>{job.name.slice(0,15)}</Card.Title>
                                <Card.Text>
                                    {job.job_introduce[0]}
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate(`/job/${job._id}`)}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Job;