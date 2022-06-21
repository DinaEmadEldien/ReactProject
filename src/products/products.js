import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import axiosInstance from "../axios config/axiosInstace";



export default function Products() {

  const [products, setProducts] = useState([]);
  // const LoaderState= useSelector((state)=>state.loader.isLoading)
  const [page,setPage]=useState(1);


  useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=850dfbd1bdec4c305a5c33a439b23ad6&page=${page}`)
    .then((res) => {
        console.log(res.data.results);
        setProducts(res.data.results);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-lg-2" key={product.id}>
              <div className="card">
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${product.poster_path}`}
                  style={{ height: "200px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text" style={{color:"grey"}}>{product.release_date}</p>
                  <button className='btn btn-dark'><Link to={`/details/${product.id}`}>Details</Link></button>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='justify-content-evenly d-flex p-5 mx-5'>
        <button className='btn btn-outline-dark mx-3' onClick={()=>setPage(page-1)}>Prev</button>
        <button className='btn btn-outline-dark mx-3' onClick={()=>setPage(page+1)}>Next</button>


      </div>
    </>
  )
}
