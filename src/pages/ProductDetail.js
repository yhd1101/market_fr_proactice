import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

const ProductDetail = () => {
    const { productId } = useParams()
    const [productInfo, setProductInfo] =useState([])

    const getProductInfo = async ()=> {
        try{
            const result = await axios.get(`http://localhost:9000/product/${productId}`)


            setProductInfo(result.data.product)
            console.log(result.data.product)

        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        getProductInfo()
    }, [])
    return (
        <div>
           <h1>{productInfo.name}</h1>
        </div>
    );
};

export default ProductDetail;