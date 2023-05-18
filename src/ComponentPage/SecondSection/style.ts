import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 100%;
  width: max-content;
  margin: 0 auto;
  border-bottom: 2px solid #4AC959;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  max-width: 600px;
  margin: 41px auto 0;
  color: #FFFFFF;
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background-image: url("/src/assets/image/SecondSection/bg.png");
    background-repeat: no-repeat;
  }
`;
