import React, { useContext } from "react"
import SignInSide from "./components/Auth/Login"
import { BrowserRouter, Switch } from "react-router-dom"
import PrivateRoute from "./components/Routes/PrivateRoute"
import PublicRoute from "./components/Routes/PublicRoute"
import Layout from "./components/Layout"
import { AuthContext } from "./Context/AuthContext"
import DashBoard from "./components/DashBoard"

function App() {
  const [state, setState] = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PublicRoute exact path="/login" component={SignInSide} />
          
          {/* <PrivateRoute
          values={state}
          exact
          path="/admin"
          component={TableAdviced}
          to="/login"
        /> */}
        </Switch>
       
      </Layout>
    </BrowserRouter>
  )
}

// export default App

import React, {component, PureComponent} from "react";
import List from "./components/List";
import { connect } from "react-redux";
import Create from "./components/Create";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled  from "styled-components";
import { sort } from "./actions";


const ListContainer = styled.div `
  display: flex;
  flex-direction: row;

`;

class App extends PureComponent {
  onDragEnd = result =>{
    const {destination, source, draggableId, type} = result;

    if (!destination){
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
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
        <Droppable droppableId="all-list" direction="horizontal" type="list">
          {provided =>(
            <ListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
             
              {List.map((list,index)=>(
                <List
                  listId={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <Create list/>
            </ListContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps)(App);