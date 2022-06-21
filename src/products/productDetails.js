import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from '../axios config/axiosInstace';

export default function ProductDetails(props) {
    const location = useLocation();
    const params = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=850dfbd1bdec4c305a5c33a439b23ad6`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div class="text-center">
            {/* <h1>Product details {params.id}</h1> */}
            <h2>{product.title}</h2>
            <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${product.poster_path}`}
                style={{ height: "200px" }}
                alt="..."
            />
            <h5>{product.title}</h5>
            <p>{product.overview}</p>
        </div>
    )
}
