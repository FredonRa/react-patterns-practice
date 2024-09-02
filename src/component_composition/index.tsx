import { FC } from "react";
import List from "./List";
import { useHook } from "./useHook";

const Container: FC = () => {
    const { data, isLoading } = useHook();

    return (
        <List data={data} isLoading={isLoading} />
    );
}

export default Container;