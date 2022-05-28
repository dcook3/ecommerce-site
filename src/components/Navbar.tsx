import React, { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import {useAppSelector} from '../hooks/reduxHooks'

interface Props {
    toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Navbar = (props : Props) => {
    const {theme} = useContext(ThemeContext);
    const count = useAppSelector((state) => state.count); 

    return (
        <nav className="navbar navbar-expand-md px-2" style={{backgroundColor: theme.foreground}}>
            <Link className='navbar-brand' to="/">Site Brand</Link>
            <div className='container-fluid'>
                <div className="navbar-nav">
                    <Link className='nav-link' to="/Products">Products</Link>
                    <Link className='nav-link' to="/About">About</Link>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to="/Cart" className="me-3">
                        <button type="button" class="btn btn-primary position-relative border-rounded">
                            Cart
                            <span class="position-absolute top-100 start-100 translate-middle bg-success p-1 border border-light rounded-pill">
                                {count}
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                    </Link>
                    <button className="btn btn-primary" onClick={props.toggleTheme}>
                        Switch Theme
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;