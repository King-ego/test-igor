import {Input, Label, Page, SendButton, Textarea, Box, Avatar} from "./style";
import Flex from "../../components/Flex";

const FiveSection = () => {
    return (
        <Page>
            <Box>
                <Avatar>
                    <img src="/src/assets/image/FiveSection/image.png"/>
                    {/*<img src="/src/assets/image/FiveSection/grafismo.png"/>*/}
                </Avatar>
                <Flex>
                    <img src="/src/assets/image/FiveSection/sendMessage.png"/>
                </Flex>
                <div>
                    <div>
                        <Label mt="40px">Your name</Label>
                        <Input placeholder="type your name here..."/>
                    </div>
                    <Flex jc="space-between" gap={24}>
                        <div style={{width: "100%"}}>
                            <Label mt="24px">Email*</Label>
                            <Input placeholder="example@example.com"/></div>

                        <div style={{width: "100%"}} >
                            <Label mt="24px">Telephone*</Label>
                            <Input placeholder="example@example.com"/></div>
                    </Flex>
                    <div>
                        <Label mt="24px">Message*</Label>
                        <Textarea placeholder="Type what you want to say to us">

                        </Textarea>
                    </div>
                    <SendButton>
                        Send now
                    </SendButton>
                </div>
            </Box>
        </Page>
    )
}

export default FiveSection;
