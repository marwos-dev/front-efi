import styled from "styled-components"

export const AbrirFormBoton = styled.div`
  display: flex;
  aling-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  margin-left: 8px;
  width: 300px;
  padding-left: 10 px;
  padding-rigth: 10px;
  opacity: ${(props) => props.buttonTextOpacity};
  color: ${(props) => props.buttonTextColor};
  backgroud-color: ${(props) => props.buttonTextBackground};
`
