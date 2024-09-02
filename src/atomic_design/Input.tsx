import { FC } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

/*
    Atoms are individual components 
*/

const Input: FC<InputProps> = (props) => {
    return (
        <input {...props} />
    );
}

export default Input;