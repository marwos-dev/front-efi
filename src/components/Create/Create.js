import React, { useState } from "react"
import { Button, Icon } from "@material-ui/core"
import Boton from "../Boton"
import { connect } from "react-redux"
import { agregarList, agregarCard } from "../../actions"

import Form from "../Forms"
import AbrirForm from "../AbrirForm"
import { AbrirFormBoton } from "./Styled"
import { RenderAbrirForm } from "./RenderAbrirForm"

const Create = (props) => {
  const { list } = props

  const [state, setState] = useState({
    formOpen: false,
    text: "",
  })

  const openForm = () => {
    setState({
      formOpen: true,
      text: "",
    })
  }

  const CerrarForm = () => {
    setState({
      formOpen: false,
      text: "",
    })
  }

  const handleImputChange = (e) => {
    setState({
      text: e.target.value,
    })
  }

  const handleAddList = (props) => {
    const { dispatch } = props
    const { text } = state

    if (text) {
      setState({
        text: "",
      })
      dispatch(agregarList(text))
    }
  }

  const handleAddCard = (props) => {
    const { dispatch, listID } = props
    const { text } = state

    if (text) {
      setState({
        text: "",
      })
      dispatch(agregarCard(listID, text))
    }
  }

  const RenderAbrirForm = (props) => {
    const { list } = props

    const botonText = list ? "Agregar otra lista" : "Agregar una card"
    const buttonTextOpacity = list ? 1 : 0.5
    const buttonTextColor = list ? "white" : "inherti"
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherti"

    return (
      <AbrirFormBoton
        onClick={openForm}
        props={{ buttonTextOpacity, buttonTextColor, buttonTextBackground }}
      >
        <Icon>+</Icon>
        <p style={{ flexShrink: 0 }}>{botonText}</p>
      </AbrirFormBoton>
    )
  }

  return state.formOpen ? (
    <Form
      text={state.text}
      onChange={handleImputChange}
      CerrarForm={CerrarForm}
    >
      <Button onClick={list ? handleAddList : handleAddCard}>
        {list ? "Agregar Lista" : "Agregar Card"}
      </Button>
    </Form>
  ) : (
    <RenderAbrirForm list={list} onClick={openForm}>
      {list ? "Agregar otra lista" : "Agregar otra card"}
    </RenderAbrirForm>
  )
}

export default connect()(Create)
