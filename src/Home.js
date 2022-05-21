import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Reatiler site!</h1>
            <p>Home page.</p>
            <Link to="Products">Browse our products</Link>
        </>
    )
}

export default Home;