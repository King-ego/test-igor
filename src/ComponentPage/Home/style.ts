import styled from "styled-components";

interface Props {
    color?: string;
}

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 30px 80px 55px;
  background: transparent;
  
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
  }
`;

export const Button = styled.button`
  background: black;
  width: 120px;
  height: 40px;
  color: white;
  border: none;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 80px 55px;
  gap: 10px;
  flex-wrap: wrap;
  
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
  }
`;

export const Page = styled.div`
  @media (min-width: 1160px) {
    background-image: url("/src/assets/image/Home/bg.png");
    background-repeat: no-repeat;
    background-position: center right;
  }
  `

export const Title = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 80%;
  color: ${(props)=>props.color || "#000000"};
`;

export const SubTitle = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 80%;
  margin-top: 5px;
  color: ${(props)=>props.color || "#000000"};
`;

export const Text = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: #000000;
  margin-top: 56px;
  margin-bottom: 61px;
`;

export const ButtonToDo = styled.button`
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
  background: #4AC959;
  border-radius: 10px;
  width: 300px;
  height: 64px;
`;
