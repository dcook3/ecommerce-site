import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Retailer site!</h1>
            <p>Welcome to the homepage.</p>
            <Link to="Products">Browse our products</Link>
        </>
    )
}

export default Home;