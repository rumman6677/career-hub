import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>oops</h2>
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;