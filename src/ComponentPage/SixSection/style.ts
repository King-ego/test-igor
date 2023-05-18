import styled from "styled-components";

interface Props {
    fs?: string;
}

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 98px;
  position: relative;
  padding: 73px 0 0 0;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: black;
    z-index: -1;
    transform: rotate(-1deg);
    background-image: url("/src/assets/image/SixSection/bg-green.png");
    background-position: center bottom;
    background-repeat: no-repeat;
  }
`;

export const Text = styled.p<Props>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: ${(props: Props) => props.fs || "24px"};
  line-height: 20px;
  color: #FFFFFF;
`;


export const Description = styled.p`
  margin-top: 18px;
  margin-bottom: 72px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
`;
