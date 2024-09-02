import { FC } from "react";
import Content from "./Content";
import Header from "./Header";

interface TemplateProps {
    children?: React.ReactNode;
}

/*
    Templates are page-level layout component that articulate 
    the content structure and design
*/

const Template: FC<TemplateProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
        </>
    );
}

export default Template;