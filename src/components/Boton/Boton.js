import React from "react"
import { StyledButton } from "./Styled"

const Boton = ({ children, onclick }) => (
  <StyledButton variant="contained" onMouseDown={onclick}>
    {children}
  </StyledButton>
)

export default Boton
