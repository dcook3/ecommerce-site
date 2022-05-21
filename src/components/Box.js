import PropTypes from 'prop-types';

const Box = ({size, children}) => 
{
    let style;
    switch (size){
        case "sm":
            style = "col-3";
            break;
        case "md":
            style = 'col-4';
            break;
        case "lg":
            style = 'col-6';
            break;
        case "xl":
            style = 'col-12';
            break;
        default:
            style = {width: 200, height: 200};
            break;
    }
    return( 
        <div className={style + " p-2 border rounded"}>
            {children}
        </div>
    );
}

Box.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node
}

Box.defaultProps = {
    color: "lightgrey"
}

export default Box;