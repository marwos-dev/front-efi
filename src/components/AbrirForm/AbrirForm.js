import React from "react"
import { Icon } from "@material-ui/core"
import { AbrirFormButton } from "./Styled"

const AbrirForm = ({ list, children, onclick }) => {
  const buttonTextOpacity = list ? 1 : 0.5
  const buttonTextColor = list ? "white" : "inherti"
  const buttonTextBackground = list ? "rgba ( 0,0,0,.15" : "inherti"

  return (
    <AbrirFormButton
      onClick={onclick}
      props={{ buttonTextBackground, buttonTextColor, buttonTextOpacity }}
    >
      <Icon>GGGG</Icon>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </AbrirFormButton>
  )
}

export default AbrirForm
