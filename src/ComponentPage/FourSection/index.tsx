import {Page, Box, Title, BoxCard, Card, BoxJob, Text, Read, Description, Ball} from "./style"
import Flex from "../../components/Flex";
import {useMemo, useState} from "react";

const FourSection = () => {
    const [step, setStep] = useState(0);
    const cards = useMemo(()=>{
        return [
            [
                {
                    url: "/src/assets/image/FourSection/bitmap-2.png",
                    text: "Organize your daily job enhance your life performance"
                },
                {
                    url: "/src/assets/image/FourSection/bitmap-1.png",
                    text: "Mark one activity as done makes your brain understands the power of doing."
                },
                {
                    url: "/src/assets/image/FourSection/bitmap.png",
                    text: " Careful with missunderstanding the difference between a list of things and a list of desires."
                },

            ],
            [
                {
                    url: "/src/assets/image/FourSection/bitmap.png",
                    text: " Careful with missunderstanding the difference between a list of things and a list of desires."
                },
                {
                    url: "/src/assets/image/FourSection/bitmap-1.png",
                    text: "Mark one activity as done makes your brain understands the power of doing."
                },
                {
                    url: "/src/assets/image/FourSection/bitmap-2.png",
                    text: "Organize your daily job enhance your life performance"
                },

            ],
            [
                {
                    url: "/src/assets/image/FourSection/bitmap-1.png",
                    text: "Mark one activity as done makes your brain understands the power of doing."
                },
                {
                    url: "/src/assets/image/FourSection/bitmap-2.png",
                    text: "Organize your daily job enhance your life performance"
                },
                {
                    url: "/src/assets/image/FourSection/bitmap.png",
                    text: " Careful with missunderstanding the difference between a list of things and a list of desires."
                },

            ],
        ]
    }, [])
    return (
        <Page>
            <Box>
                <Title>good things</Title>
                <BoxCard>
                    {cards[step]?.map((card, idx) => (
                        <Card key={idx}>
                            <img src={card.url}/>
                            <Description>
                                <BoxJob>
                                    function
                                </BoxJob>
                                <Text>
                                    {card.text}
                                </Text>
                                <Read>
                                    read more
                                </Read>
                            </Description>
                        </Card>
                    ))}

                    {/*<Card>
                        <img src="/src/assets/image/FourSection/bitmap-1.png"/>
                        <Description>
                            <BoxJob>
                                function
                            </BoxJob>
                            <Text>
                                Mark one activity as done makes your brain understands the power of doing.
                            </Text>
                            <Read>
                                read more
                            </Read>
                        </Description>
                    </Card>
                    <Card>
                        <img src="/src/assets/image/FourSection/bitmap.png"/>
                        <Description>
                            <BoxJob>
                                function
                            </BoxJob>
                            <Text>
                                Careful with missunderstanding the difference between a list of things and a list of desires.
                            </Text>
                            <Read>
                                read more
                            </Read>
                        </Description>
                    </Card>*/}
                </BoxCard>
                <Flex jc="center" gap={20} mt="33px">
                    <Ball onClick={() => setStep(0)} colorBall={!step ? "#4AC959" : ""}/>
                    <Ball onClick={() => setStep(1)} colorBall={step===1 ? "#4AC959" : ""}/>
                    <Ball onClick={() => setStep(2)} colorBall={step === 2 ? "#4AC959" : ""}/>
                </Flex>
            </Box>
        </Page>
    )
}

export default FourSection;
