import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const getProduct = async () =>{
       try {

           const  result = await  axios.get(`http://localhost:9000/product/${id}`)
           console.log(result.data.product)
           setProduct(result.data.product)

       } catch (err){
           console.log(err)
       }
    }

    useEffect(() => {
        getProduct()
    }, [])


    return (
        <div>
            <h1>지역: {product.region}</h1>


        </div>
    );
};

export default Detail;