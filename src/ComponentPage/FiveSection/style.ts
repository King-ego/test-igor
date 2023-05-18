import styled from "styled-components";

interface Props {
    w?: string;
    mt?: string;
    mb?: string;
}

export const Page = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 80px 55px;
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
  }
`;

export const Input = styled.input<Props>`
  width: ${(props: Props) => props.w || "100%"};
  border: 1px solid #06152B;
  height: 50px;
  padding: 0 15px;
  border-radius: 4px;

  &::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #9A9A9A;
  }
`;

export const Label = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #06152B;
  margin-top: ${(props: Props) => props.mt || "0"};
  margin-bottom: ${(props: Props) => props.mb || "8px"};
`;

export const SendButton = styled.button`
  width: 100%;
  margin-top: 40px;
  background: #46BD62;
  border-radius: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FFFFFF;
  border: none;
  height: 52px;
`;


export const Textarea = styled.textarea`
  width: 100%;
  padding: 16px;
  height: 150px;
  border: 1px solid #06152B;
  border-radius: 4px;
`;


export const Box = styled.div`
  width: 100%;
  max-width: 700px;
`;

export const Avatar =styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 25%;
    bottom: 35%;
    top: 50%;
    right: 50%;
    z-index: -1;
    background-image: url("/src/assets/image/FiveSection/grafismo.png");
  }
`;
