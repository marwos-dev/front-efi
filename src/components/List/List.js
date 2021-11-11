import React, { useState, useEffect } from "react"
import Task from "../Card/Card"
import Create from "../Create/Create"
import { Droppable, Draggable } from "react-beautiful-dnd" // es para poder arrastrar los elementos
import { connect, Provider } from "react-redux"
import { editarTitulo } from "../../actions"
import { Container } from "@material-ui/core"
import { ListContainer, StyledInput } from "./Styled"

const List = ({ title, cards, listID, index, dispatch }) => {
  const [isEditar, setIsEditar] = useState(false)
  const [listTitle, setListTitle] = useState("title")

  const handleChange = (e) => {
    e.preventDefault()
    setListTitle(e.target.value)
  }

  const renderEditarInput = () => {
    return (
      <StyledInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onBlur={handleFinalizarEdicion}
      />
    )
  }

  //   const handleFocus = (e) => {
  //     console.log("Hola")
  //     e.target.select()
  //   }

  const handleFinalizarEdicion = (e) => {
    setIsEditar(false)
    dispatch(editarTitulo(listID, listTitle))
  }

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {isEditar ? (
                  renderEditarInput()
                ) : (
                  <h4 onClick={() => setIsEditar(true)}>{listTitle}</h4>
                )}

                {cards.map((card, index) => (
                  <Task
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listID={listID}
                  />
                ))}
                {provided.placeholder}
                <Create listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  )
}

export default connect()(List)
