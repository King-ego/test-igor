import styled from "styled-components";

interface Props {
    jc: string;
    ai:string;
    gap: number;
    mt: string;
    dr: string;
}
export const Content = styled.div<Props>`
  display: flex;
  justify-content: ${(props: Props)=> props.jc};
  gap: ${(props: Props)=> props.gap+"px"};
  margin-top: ${(props: Props)=> props.mt};
  align-items: ${(props: Props)=> props.ai};
  flex-direction: ${(props:Props)=> props.dr};
  flex-wrap: wrap;
`;
