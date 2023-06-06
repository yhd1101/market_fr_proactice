import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

const JobDetail = () => {
    const { jobId } = useParams()
    const [jobInfo, setJobInfo] = useState([])

    const getJobInfo = async () => {
        try{
            const result = await axios.get(`http://localhost:9000/job/${jobId}`)

            setJobInfo(result.data.job)

            console.log(result.data.job)

        } catch (err){
            console.log(err)
        }
    }
    useEffect(() => {
        getJobInfo()
    }, [])

    return (

        <div>
            <h1>{jobInfo.name}</h1>
        </div>
    );
};

export default JobDetail;