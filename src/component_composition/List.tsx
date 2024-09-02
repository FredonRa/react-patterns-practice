import { FC } from "react";
import { Item } from "./IItem";

interface ListProps {
    data: Item[]
    isLoading: boolean;
}

const List: FC<ListProps> = ({ data, isLoading }) => {
    if (isLoading) return <h2>Cargando...</h2>

    return (
        <ul>
            {data.map((item) => <li>{item.name}</li>)}
        </ul>
    );
}

export default List;