interface Props {
    productName: string;
    price: string;
    classOverrides?: Object;
}

const ProductHeader = (props : Props) => {
    const {productName, price, classOverrides} = props;
    const headerBSClasses = {margin: 'mx-1', ...classOverrides};
    return (
        <div className={Object.values(headerBSClasses).join(' ')}>
            <h4 className='d-inline'>{productName}</h4>
            <span className='fs-4'> | ${price}</span>
        </div>
    )
}

export default ProductHeader;