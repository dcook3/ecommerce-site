import React, { useEffect, useState, useContext } from 'react';
import useFetch from '../hooks/useFetch.js';
import Loading from './Loading.js'
import ProductHeader from './ProductHeader';
import Box from './Box'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router';
import { ThemeContext } from '../context/themeContext'

const Products = () => {
    const {data, loading, error} = useFetch('products');
    const {productId} = useParams();
    const { theme } = useContext(ThemeContext);

    if (loading){
        return (<Loading/>)
    }
    if(error !== ''){
        return ({error})
    }

    //Product Detail View
    if(productId !== undefined){
        const prod = data.find(prod => prod.id == productId);
        return (
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-row p-5' style={{color: theme.textColor}}>
                {<img src={prod.image} className="col-3 me-2"></img>}
                    <div className='ms-2 d-flex flex-column'>
                        <h3>{prod.title}</h3>
                        <p>{prod.description}</p>
                        <div className='align-self-end'>
                            <h4>${prod.price}</h4>
                            <div className='d-flex flex-column align-items-center border border-rounded p-2 my-4' style={{backgroundColor: theme.foreground}}>
                                <h4>Rating</h4>
                                <span>Rated <b>{prod.rating.rate}</b> out of a total of {prod.rating.count} reviews</span>
                            </div>
                            <Link to="./" className='mt-5' className='col-4'><button className='btn btn-primary'>Go Back to Products View</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //Full products list
    return (
        <>
            {data.length && data.map((data) => {
                return (
                    <Box key={data.id} size='xl' children={
                        <div className='d-flex flex-row'>
                            {<img src={data.image} className="col-2"></img>}
                            <div className='d-flex flex-column'>
                                <ProductHeader productName={data.title} price={data.price} detailsLink />
                                <p>{data.description}</p>
                                <Link to={`./${data.id}`} className="align-self-end col-2"><button class='btn btn-primary'>See Details</button></Link>
                            </div>
                        </div>
                    } />
            )})
            }
        </>
    )
}

export default Products;