import React, { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import { Product } from '../types/Product';
import { ThemeContext } from '../context/themeContext';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks/reduxHooks';

const ProductDetails = () =>{
    const {data, loading, error} = useFetch();
    const {productId} = useParams();
    const { theme } = useContext(ThemeContext);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const prod : Product | undefined = data.find((prod:Product) => prod.id === Number.parseInt(productId));

    const buttonHandler = (e:React.MouseEvent) => {
        e.preventDefault();
        dispatch({type: 'add', payload: {id: nanoid(), product: prod}});
        navigate("/Cart");
    }

    if (loading){
        return (<Loading/>)
    }
    if(error !== ''){
        return (<span className='text-danger'>{error}</span>)
    }

    

        if(prod !== undefined)
            return (
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-row p-5' style={{color: theme.textColor}}>
                    {<img src={prod.image} className="col-3 me-2" alt={prod.title}></img>}
                        <div className='ms-2 d-flex flex-column'>
                            <h3>{prod.title}</h3>
                            <p>{prod.description}</p>
                            <div className='align-self-end'>
                                <h4>${prod.price}</h4>
                                <div className='d-flex flex-column align-items-center border border-rounded p-2 my-4' style={{backgroundColor: theme.foreground}}>
                                    <h4>Rating</h4>
                                    <span>Rated <b>{prod.rating.rate}</b> out of a total of {prod.rating.count} reviews</span>
                                </div>
                                <div className="d-flex flex-column mt-5">
                                    <button onClick={buttonHandler} className='btn btn-primary col-12 mb-2'>Add to Cart</button>
                                    <Link to="/Products" className=''><button className='btn btn-secondary col-12'>Go Back to Products View</button></Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )
        else{
            return(<div className='text-danger'>An error occured in finding this product. Please go back to products and try again.</div>)
        }
}

export default ProductDetails;