import {ReactNode, FC} from "react";
import {Content} from "./style";

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    )
}

export default Container
