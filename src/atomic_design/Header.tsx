import { FC } from "react";
import Button from "./Button";
import Input from "./Input";

/*
    Organisms are components composed of groups of molecules/atoms
*/

const Header: FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Input type="text" placeholder="Search..." /></li>
                    <li>Home</li>
                    <li>My Account</li>
                    <li><Button>Log Out</Button></li>
                </ul>
            </nav>
        </header >
    );
}

export default Header;