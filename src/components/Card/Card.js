import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import { Typography } from "@material-ui/core"
import { CardContent } from "@material-ui/core"
import { Draggable } from "react-beautiful-dnd"
import Form from "../Forms"
import { agregarCard, editarCard, borrarCard } from "../../actions"
import { connect } from "react-redux"
import Boton from "../Boton"
import { BotonBorrar, BotonEditar, CardContainer } from "./Styled"

const Task = React.memo(({ text, id, listId, index, dispatch }) => {
  const [isEditar, setisEditar] = useState(false)
  const [cardText, setText] = useState(text)

  const closeForm = (e) => {
    setisEditar(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const GuardarCard = (e) => {
    e.preventDefault()

    dispatch(editarCard(id, listId, cardText))
  }

  const handleBorrarCard = (e) => {
    dispatch(borrarCard(id, listId))
  }

  const renderEditarForm = () => {
    return (
      <Form text={cardText} onChange={handleChange}>
        <Boton onClick={GuardarCard}> Guardar</Boton>
      </Form>
    )
  }

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setisEditar(true)}
          >
            <Card>
              <BotonEditar
                onMouseDown={() => setisEditar(true)}
                fontSize="small"
              >
                Editar
              </BotonEditar>
              <BotonBorrar fontSize="small" onMouseDown={handleBorrarCard}>
                Borrar
              </BotonBorrar>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    )
  }

  return isEditar ? renderEditarForm() : renderCard()
})

export default connect()(Task)
