import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <Link className='text-decoration-none' to="/">Retailer Site Name</Link>
                <span className="text-muted ms-1">| © 2022 Dylan Cook</span>
            </div>
            </footer>
        </div>
    )
}

export default Footer;