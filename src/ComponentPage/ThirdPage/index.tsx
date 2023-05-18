import {Page, Box, Title, Text, Content, Label, Button, CircleToDo, CircleDone, Delete} from "./style";
import Flex from "../../components/Flex";

const ThirdPage = () => {
    return (<Page>
        <Box color="#E88D39">
            <Title>To-do</Title>
            <div>
                <Text>Take a breath</Text>
                <Text>Start doing</Text>
            </div>
            <Content mt="34px" mb="41px">
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>this is a new task</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Develop the To-do list page</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Create the drag-and-drop function</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Add new tasks</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Delete itens</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Erase all</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Checked item goes to Done list</Label>
                </Flex>
                <Flex jc="space-between">
                    <Flex gap={16}>
                        <CircleToDo></CircleToDo>
                        <Label>This item label may be edited</Label>
                    </Flex>
                    <Delete>delete</Delete>
                </Flex>
                <Flex gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Editing an item...</Label>
                </Flex>
            </Content>
            <Button>
                erase all
            </Button>
        </Box>
        <Box color="#4AC959">
            <Title>Done</Title>
            <div>
                <Text>Congratulations!</Text>
                <Text fw={700}>You have done 5 tasks</Text>
            </div>
            <Content mt="44px" mb="60px">
                <Flex jc="space-between">
                    <Flex gap={16}>
                        <CircleDone></CircleDone>
                        <Label>Get FTP credentials</Label>
                    </Flex>
                    <Delete>delete</Delete>
                </Flex>
                <Flex gap={16}>
                    <CircleDone></CircleDone>
                    <Label>Home Page Design </Label>
                </Flex>
                <Flex gap={16}>
                    <CircleDone></CircleDone>
                    <Label>E-mail John about the deadline</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleDone></CircleDone>
                    <Label>Create a Google Drive folder</Label>
                </Flex>
                <Flex gap={16}>
                    <CircleDone></CircleDone>
                    <Label>Send a gift to the client</Label>
                </Flex>
            </Content>
            <Button>
                erase all
            </Button>
        </Box>
    </Page>)
}

export default ThirdPage
