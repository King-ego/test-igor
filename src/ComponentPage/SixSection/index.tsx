import {Description, Footer, Text} from "./style";
import Flex from "../../components/Flex";

const SixSection = () => {
    return (
        <Footer>
            <Flex dr="column">
            <Flex dr="column" gap={28}>
                <Text>Need help?</Text>
                <Text fs="20px">coopers@coopers.pro</Text>
            </Flex>
            <Description>© 2021 Coopers. All rights reserved.</Description>
            </Flex>
        </Footer>
    )
}

export default SixSection;
