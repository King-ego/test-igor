import {Button, Header, Content, Title, SubTitle, Text, ButtonToDo, Page} from "./style";
import LoginModal from "../../components/Modal/Login";
import {useState} from "react";

const Home = () => {
    const [showModalUser, setShowModalUser] = useState(false);

    function CloseModal() {
        setShowModalUser(false);
    }

    return (
        <Page>
            {showModalUser && <LoginModal toggle={CloseModal}/>}
            <Header>
                <img src="/src/assets/image/header/logo.png"/>
                <Button onClick={() => setShowModalUser(true)}>entrar</Button>
            </Header>
            <Content>
                <div>
                    <div>
                        <Title>Organize</Title>
                        <SubTitle color="#4AC959">your daily jobs</SubTitle>
                    </div>
                    <div>
                        <Text>The only way to get things done</Text>
                    </div>
                    <div>
                        <ButtonToDo>Go to To-do list</ButtonToDo>
                    </div>
                </div>
                <div>
                    <img src="/src/assets/image/home/room.jpg" style={{width: "100%"}}/>
                </div>
            </Content>
        </Page>
    )
}

export default Home;
