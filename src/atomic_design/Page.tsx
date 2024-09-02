import { FC } from "react";
import Template from "./Template";

/*
    Pages are instances of templates that show the Page UI
*/

const Page: FC = () => {
    return (
        <Template>
            <h2>A basic Atomic Design Pattern practice in react</h2>
        </Template>
    );
}

export default Page;