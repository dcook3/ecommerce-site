import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Box = ({size, children}) => 
{
    const { theme } = useContext(ThemeContext);
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
            style = 'col-6';
            break;
    }

    return( 
        <div className={style + " p-2 mb-2 border rounded"} style={{backgroundColor: theme.foreground, color: theme.textColor}}>
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