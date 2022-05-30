import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Box from './Box';
import ProductHeader from './ProductHeader';
import {Link, useNavigate} from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { Product } from '../types/Product';
import { nanoid } from '@reduxjs/toolkit';


const Products = () => {
    const {data, loading, error} = useFetch();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const buttonHandler = (e:React.MouseEvent, id:number) => {
        e.preventDefault();
        dispatch({type: 'add', payload: {id: nanoid(), product: data.find((prod:Product) => prod.id === id)}});
        navigate("/Cart");
    }

    if (loading){
        return (<Loading/>)
    }
    if(error !== ''){
        return (<span className='text-danger'>{error}</span>)
    }

    return (
        <div>
            {data.length && data.map((data) => {
                return (
                    <Box key={data.id} size='xl' children={
                        <div className='d-flex flex-row'>
                            {<img src={data.image} className="col-2" alt={data.title}></img>}
                            <div className='d-flex flex-column col-10'>
                                <ProductHeader productName={data.title} price={data.price.toString()} />
                                <p>{data.description}</p>
                                <div className="d-flex flex-column align-self-end col-4 mt-3 me-3">
                                    <button onClick={(e) => buttonHandler(e, data.id)} className='btn btn-primary col-12 mb-2'>Add to Cart</button>
                                    <Link to={`/Products/${data.id}`}><button className='btn btn-secondary col-12'>See Details</button></Link>
                                </div>
                            </div>
                        </div>
                    } />
            )})
            }
        </div>
    )
}

export default Products;