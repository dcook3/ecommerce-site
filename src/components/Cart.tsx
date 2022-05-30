import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../hooks/reduxHooks'
import { CartItem } from '../redux/store';
import Box from './Box';
import ProductHeader from './ProductHeader';

const Cart = () => {
    const products = useAppSelector((state) => state.items); 
    const dispatch = useAppDispatch();
    
    const handleDelete = (e:React.MouseEvent, id:string) =>{
        e.preventDefault();
        dispatch({type:'remove', payload: products.find((prod:CartItem) => prod.id === id)})
        
    }

    if(products.length > 0)
    {
        return (
            <div>
            {products.map((prod:CartItem) => {
                return (
                    <Box key={prod.id} size='xl' children={
                        <div className='d-flex flex-row'>
                            {<img src={prod.product.image} className="col-2" alt={prod.product.title}></img>}
                            <div className='d-flex flex-column'>
                                <ProductHeader productName={prod.product.title} price={prod.product.price.toString()} />
                                <p>{prod.product.description}</p>
                                <div className='col-2 align-self-end me-2'>
                                    <Link to={`/Products/${prod.id}`}><button className='btn btn-primary col-12 mb-2'>See Details</button></Link>
                                    <button className="btn btn-danger col-12" onClick={(e) => handleDelete(e, prod.id)}>Remove from cart</button>
                                </div>
                            </div>
                            
                        </div>
                    } />
            )})
            }
        </div>
        )
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <Link to="/Products">Add items to your cart here</Link>
        </div>
    )
}

export default Cart;