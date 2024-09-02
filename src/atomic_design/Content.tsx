import { FC } from "react";
import Form from "./Form";

interface ContentProps {
    children?: React.ReactNode;
}

/*
    Organisms are components composed of groups of molecules/atoms
*/

const Content: FC<ContentProps> = ({ children }) => {
    return (
        <main>
            {children}
            <Form />
        </main>
    );
}

export default Content;