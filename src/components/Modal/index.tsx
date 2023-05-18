import {FC, ReactNode} from "react";
import {Container} from "./style";

interface IModal {
    children: ReactNode;
}

const Modal: FC<IModal> = ({children}) => {
    /*if (!showModal) {
        return <div></div>
    }*/
    return (
         <Container>{children}</Container>
    )

}

export default Modal
