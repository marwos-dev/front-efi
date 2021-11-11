import React from "react"
import { connect } from "react-redux"
import List from "../List/List"
import Create from "../Create"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { ListContainer } from "./Styled"
import { sort } from "../../actions"

const DashBoard = (props) => {
  // AcA VA LA REQUEST
  const ListStatus = [
    { id: "asd", title: "title", cards: [] },
    { id: "asd", title: "awebo", cards: [] },
  ]

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }
    props.dispatch(
      sort(
        source.DroppableId,
        destination.DroppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h2>Bienvenido</h2>
      <Droppable
        droppableId="todas-las-listas"
        direction="horizontal"
        type="List"
      >
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {ListStatus.map((e) => (
              <List listId={e.id} key={e.id} title={e.title} cards={e.cards} />
            ))}
            {provided.placeholder}
            <Create List />
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}

const mapStateToProps = (state) => ({
  lists: state.lists,
})

export default connect(mapStateToProps)(DashBoard)
