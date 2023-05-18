import styled from "styled-components";

interface Props {
    mt?: string;
}
export const Content = styled.div`
  position: relative;
  max-width: 932px;
  width: 100%;
  padding: 52px 52px 53px 52px;
  margin: 0 auto;
  background: white;
`;
export const Close = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 64px;
  color: #000000;
  position: absolute;
  right: 20px;
  top: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #959595;
  border-radius: 10px;
`;

export const Label = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-top: ${(props: Props)=> props.mt || "0"};
`;

export const Button = styled.button`
  background: #4AC959;
  border: none;
  
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  width: 100%;
  max-width: 300px;
  margin: 56px auto 0;
  height: 54px;
  
`;

export const StyleFlex = styled.div`
  display: flex;flex-direction: column;
  width: 100%;
  max-width: 342px
`;

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
