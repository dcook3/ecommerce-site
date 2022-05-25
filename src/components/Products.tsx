import React, { useEffect, useState, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Box from './Box';
import ProductHeader from './ProductHeader';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import { ThemeContext } from '../context/themeContext';
import { Product } from './types/Product';

const Products = () => {
    const {data, loading, error} = useFetch();
    const {productId} = useParams();
    const { theme } = useContext(ThemeContext);

    if (loading){
        return (<Loading/>)
    }
    if(error !== ''){
        return (<span className='text-danger'>{error}</span>)
    }

    //Product Detail View
    if(productId !== undefined){
        const prod : Product | undefined = data.find((prod:Product) => prod.id == Number.parseInt(productId));

        if(prod !== undefined)
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
                                <Link to="./" className='mt-5 col-4'><button className='btn btn-primary'>Go Back to Products View</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        else{
            return(<div className='text-danger'>An error occured in finding this product. Please go back to products and try again.</div>)
        }
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
                                <ProductHeader productName={data.title} price={data.price.toString()} />
                                <p>{data.description}</p>
                                <Link to={`./${data.id}`} className="align-self-end col-2"><button className='btn btn-primary'>See Details</button></Link>
                            </div>
                        </div>
                    } />
            )})
            }
        </>
    )
}

export default Products;