import styled from "styled-components";
interface Props {
    colorBall?: string;
}
export const Page = styled.div`
  padding: 0 80px 55px;
  display: flex;
  gap: 41px;
  
  background-image: url("/src/assets/image/FourSection/bg.png");
  background-repeat: no-repeat;
  background-position-x: 80px;
  /*background-position: center left;*/
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
    background-position-x: 5%;
  }
`;

export const Box = styled.div`
  padding: 80px 0 0 80px;
  
  @media (max-width: 540px) {
    padding-left: 0;
  }
`;
export const Title = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 110%;

  color: #FFFFFF;
`;

export const BoxCard = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`
export const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  width: 360px;
  box-shadow: 0px 4px 60px rgba(66, 66, 66, 0.2);
`

export const BoxJob = styled.p`
  font-family: 'Soleil';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  border: 1px solid #9499B3;
  border-radius: 16px;
  color: #9499B3;
  width: max-content;
  padding: 6px 12px;
`;
export const Text = styled.p`
  margin: 16px 0 68px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #312F4F;
`;
export const Description = styled.p`
  padding: 23px 32px;
`;
export const Read = styled.p`
  font-family: 'Soleil';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #42D76B;
`;

export const Ball = styled.div<Props>`
  background: ${(props:Props)=> props.colorBall || "#C4C4C4"};
  width: 29px;
  height: 29px;
  border-radius: 50%;
`;
