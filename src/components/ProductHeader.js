import PropTypes from 'prop-types';

const ProductHeader = ({productName, price, detailsLink, classOverrides}) => {
    const headerBSClasses = {margin: 'mx-1', ...classOverrides};
    return (
        <div className={Object.values(headerBSClasses).join(' ')}>
            <a href={detailsLink}>
                <h4 className='d-inline'>{productName}</h4>
                <span className='fs-4'> | ${price}</span>
            </a>
        </div>
    )
}

ProductHeader.propTypes = {
    classOverrides: PropTypes.object,
    productName: PropTypes.string.isRequired,
    detailsLink: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default ProductHeader;