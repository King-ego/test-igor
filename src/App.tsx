import Home from "./ComponentPage/Home"
import './App.css';
import Container from "./components/Container";
import SecondSection from "./ComponentPage/SecondSection";
import ThirdPage from "./ComponentPage/ThirdPage";
import FourSection from "./ComponentPage/FourSection";
import FiveSection from "./ComponentPage/FiveSection";
import SixSection from "./ComponentPage/SixSection";

function App() {
    return (
        <Container>
            <Home/>
            <SecondSection/>
            <ThirdPage />
            <FourSection />
            <FiveSection />
            <SixSection />
        </Container>
    )
}

export default App
