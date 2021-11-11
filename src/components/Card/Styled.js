import styled from "styled-components"
import { Icon } from "@material-ui/core"

export const CardContainer = styled.div`
margin:0 0 8px 0;
position: relative
max-width= 100%
word-wrap: break-word; //se usa para que se dividan las palabras y no desborden en el container

`
export const BotonEditar = styled.div`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`
export const BotonBorrar = styled(Icon)`
  position: absolute;
  display: none;
  rigth: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}: hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`
