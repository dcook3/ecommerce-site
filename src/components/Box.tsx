import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

interface Props {
    size: string;
    children: JSX.Element | JSX.Element[];
}

const Box = (props: Props) => 
{
    const {size, children} = props
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

export default Box;