import React, {component,PureComponent} from "react";
import List from "./List";
import { connect } from "react-redux";
import Create from "./Create";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import { style } from "styled-components";
import { sort } from "../actions";


const ListContainer = style.div `
    display: flex;
    flex-direction: row;
`;

class DashBoard extends PureComponent{
    onDragEnd = result=>{
        const { destination, source, draggableId,type} = result;

        if (!destination){
            return;
        }

        this.props.dispatch(
            sort(
                source.DroppableId,
                destination.DroppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };

    render(){
        const {List} = this.props;
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <h2>Bienvenido</h2>
                <Droppable droppableId="todas-las-listas" direction="horizontal" type="List">
                    {provided => (
                        <ListContainer
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {List.map((List,index)=>(
                                <List
                                    listId={List.id}
                                    key={List.id}
                                    title={List.title}
                                    cards={List.cards}
                              />
                            ))}
                            {provided.placeholder}
                            <Create List/>
                        </ListContainer>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
} 

const mapStateToProps = state => ({
    lists:state.lists
});

export default connect (mapStateToProps)(DashBoard);