import React from "react"
import {
  Container,
  StyledCard,
  StyledTextArea,
  ButtonContainer,
  StyledIcon,
} from "./Styled"

// React memo renderiza si encuentra un cambio en la nueva renderizada sino, ahorra el renderizado
const Form = React.memo(
  ({ list, text = " ", onChange, CerrarForm, children }) => {
    const placeholder = list
      ? "Ingrese un titulo.."
      : "Ingrese un titulo para esta card.."

    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            value={text}
            onChange={(e) => onChange(e)}
            onBlur={CerrarForm}
          />
        </StyledCard>
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={CerrarForm}>X</StyledIcon>
        </ButtonContainer>
      </Container>
    )
  }
)

export default Form
