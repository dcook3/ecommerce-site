import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import Loading from './Loading.js'
import ProductHeader from './ProductHeader';
import Box from './Box'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router';

const Products = () => {
    //Check if urlFrag param pass works
    const {data, loading, error} = useFetch('products');
    const {productId} = useParams();

    if (loading){
        return (<Loading/>)
    }
    if(error !== ''){
        return ({error})
    }
    if(productId !== undefined){
        const prod = data.find(prod => prod.id == productId);
        return (
            <div className='d-flex'>
                {<img src={prod.image} className="col-2"></img>}
                <div className='d-flex flex-row col-8'>
                    <div className='ms-2 d-flex flex-column'>
                        <h3>{prod.title}</h3>
                        <p>{prod.description}</p>
                        <h4 className='align-self-end'>${prod.price}</h4>
                        <div className='d-flex flex-column align-items-center align-self-end border border-rounded bg-light'>
                            <h4>Rating</h4>
                            <span>Rated <b>{prod.rating.rate}</b> out of a total of {prod.rating.count} reviews</span>
                        </div>
                        <Link to="./" className='mt-5'>Go Back to Products View</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {data.length && data.map((data) => {
                return (
                    <Box key={data.id} size='xl' children={
                        <div className='d-flex flex-row'>
                            {<img src={data.image} className="col-2"></img>}
                            <div className='ms-2'>
                                <ProductHeader productName={data.title} price={data.price} detailsLink />
                                <p>{data.description}</p>
                                <Link className='mx-auto' to={`./${data.id}`}>See Details</Link>
                            </div>
                        </div>
                    }>
                    </Box>
            )})
            }
        </>
    )
}

export default Products;