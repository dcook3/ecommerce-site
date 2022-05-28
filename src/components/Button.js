import PropTypes from 'prop-types';

const Button = ({ label, onClick}) => 
{
    return(
        <>
            <button class="btn btn-primary" onClick={onClick} className="btn">{label}</button>
        </>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;