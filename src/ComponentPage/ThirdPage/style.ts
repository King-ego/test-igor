import styled from "styled-components";
interface PropsStyle {
    color?: string;
    fw?:number;
    mt?: string;
    mb?: string;
}
export const Page = styled.div`
  padding: 30px 80px 55px;
  display: flex;
  justify-content: center;
  gap: 41px;
  flex-wrap: wrap;
  
  @media (min-width: 680px) {
    background-image: url("/src/assets/image/ThirdPage/grafismos-lateral-esquerda.png");
    background-repeat: no-repeat;
  }
  /*background-position: center left;*/
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
  }
`;

export const Box = styled.div<PropsStyle>`
  border-top: 20px solid ${(props:PropsStyle)=>props.color || "white"};
  padding: 40px 38px 40px 23px;
  width: 380px;
  height: max-content;
  box-shadow: 0px 4px 60px rgba(66, 66, 66, 0.2);
`

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60%;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.p<PropsStyle>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props:PropsStyle)=>props.fw};
  font-size: 20px;
  line-height: 29px;
  text-align: center;

  color: #000000;
`;

export const Content = styled.div<PropsStyle>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${(props: PropsStyle) => props.mt || "0"};
  margin-bottom: ${(props: PropsStyle) => props.mb || "0"};
`;

export const Label =styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 220px;

  color: #000000;  
`;

export const Delete = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 200%;
  color: #999999;
`;

export const Button = styled.button`
  width: 300px;
  height: 64px;
  border: none;
  background: #000000;
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #FFFFFF;
`;

export const CircleToDo = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid #E88D39;
  border-radius: 50%;
`;
export const CircleDone = styled.div`
  background-image: url("/src/assets/image/ThirdPage/check.png");
  width: 24px;
  height: 24px;
  /*background: #4AC959;*/
`;
