import Modal from "../index";
import {FC, ReactNode, useState} from "react";

import {Content, Close, Input, Label, Button, StyleFlex, SubTitle, Title} from "./style"
import Flex from "../../Flex";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import api from "../../../utils/api";

interface ILoginModal {
    toggle: () => void;
}

const LoginModal: FC<ILoginModal> = ({toggle}) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(0);
    const [createPassword, setCreatePassword] = useState("");
    const [createEmail, setCreateEmail] = useState("");
    const [createName, setCreateName] = useState("");

    async function submit() {
        try {
            const user = await api.post("/login", {password, email})
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }

    async function create() {
        try {
            const user = await api.post("/user",
                {name: createName, password: createPassword, email: createEmail}
            );
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal>
            <Content>
                <Close onClick={() => toggle()}>close</Close>
                {step === 0 ? <>
                    <Flex gap={42}>
                        <img src="/src/assets/image/Modal/image.png"/>
                        <div>
                            <Title>Sign in</Title>
                            <SubTitle color="#4AC959">to access your list</SubTitle>
                        </div>
                    </Flex>
                    <Flex dr="column">
                        <StyleFlex ai="flex-start" dr="column" style={{marginTop: "39px"}}>
                            <Label>User</Label>
                            <Input onChange={(value) => setEmail(value.target.value)} value={email}/>
                        </StyleFlex>
                        <StyleFlex dr="column" ai="flex-start">
                            <Label mt="30px">Password</Label>
                            <Input onChange={(value) => setPassword(value.target.value)} value={password}/>
                        </StyleFlex>
                        <Button onClick={submit}>Sign in</Button>
                        <SubTitle style={{fontSize: "18px"}} color="#4AC959" onClick={() => setStep(1)}>Login</SubTitle>
                    </Flex>
                </> : <>
                    <Flex gap={42}>
                        <img src="/src/assets/image/Modal/image.png"/>
                        <div>
                            <Title>Login</Title>
                            {/*<SubTitle color="#4AC959">to access your list</SubTitle>*/}
                        </div>
                    </Flex>
                    <Flex dr="column">
                        <StyleFlex ai="flex-start" dr="column" style={{marginTop: "39px"}}>
                            <Label>Name</Label>
                            <Input onChange={(value) => setCreateName(value.target.value)} value={createName}/>
                        </StyleFlex>
                        <StyleFlex dr="column" ai="flex-start">
                            <Label mt="30px">Email</Label>
                            <Input onChange={(value) => setCreateEmail(value.target.value)} value={createEmail}/>
                        </StyleFlex>
                        <StyleFlex dr="column" ai="flex-start">
                            <Label mt="30px">Password</Label>
                            <Input onChange={(value) => setCreatePassword(value.target.value)} value={createPassword}/>
                        </StyleFlex>
                        <Button onClick={create}>Sign in</Button>
                        <SubTitle style={{fontSize: "18px"}} onClick={() => setStep(0)} color="#4AC959">Login</SubTitle>
                    </Flex>
                </>}

            </Content>

        </Modal>
    )
}

export default LoginModal;
