import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

/*
    Atoms are individual components 
*/

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props}>{children}</button>
    );
}

export default Button;