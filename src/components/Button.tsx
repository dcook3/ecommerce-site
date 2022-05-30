interface Props {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props : Props) => 
{
    const { label, onClick} = props;
    return(
        <>
            <button className="btn btn-primary" onClick={onClick}>{label}</button>
        </>
    );
}

export default Button;