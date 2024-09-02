import { FC } from "react";
import Button from "./Button";
import Input from "./Input";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

/*
    Molecules are components composed of groups of molecules/atoms
*/

const Form: FC<FormProps> = ({ ...props }) => {
    return (
        <form {...props}>
            <Input type="text" placeholder="Name" />
            <Input type="date" placeholder="Birthday" />
            <Button type="submit">Click me!</Button>
        </form>
    );
}

export default Form;