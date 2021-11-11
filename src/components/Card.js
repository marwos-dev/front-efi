import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import { Typography} from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import {Draggable} from "react-beautiful-dnd";
import { styled } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import Form from "./Forms";
import { agregarCard, editarCard, borrarCard} from "../actions";
import {connect} from "react-redux";
import Boton from "./Boton";
import List from "./List";



const card = React.memo(({text,id,listId,index,dispatch})=>{
    const [isEditar, setisEditar]=useState(false);
    const [cardText,setText]= useState(text);


    const CardContainer = styled.div`
    margin:0 0 8px 0;
    position: relative
    max-width= 100%
    word-wrap: break-word; //se usa para que se dividan las palabras y no desborden en el container
    
    `;

    const BotonEditar = styled.div`
    position : absolute;
    display:none;
    right: 5px;
    top: 5px;
    opacity: 0.5;
    ${CardContainer}:hover & {
        display: block;
        cursor: pointer;
    }
    &:hover {
        opacity:0.8;
    }
    `;
    
    const BottonBorrar = styled(Icon)`
    position : absolute;
    display:none;
    rigth: 5px;
    bottom:5px;
    opacity: 0.5;
    ${CardContainer}: hover & {
        display: block;
        cursor: pointer;
    }
    &:hover{
        opacity:0.8;
    }
    `;

    const closeForm =e =>{
        setisEditar(false);

    };

    const handleChange = e => {
        setText(e.target.value);
    };

    const GuardarCard = e =>{
        e.preventDefault();

        dispatch(editarCard(id,listId,cardText));
    };

    const handleBorrarCard = e => {
        dispatch(borrarCard(id,listId));

    };

    const renderEditarForm = () =>{
        return(
            <Form text ={cardText} onChange ={handleChange}>
                <Boton onClick={GuardarCard}> Guardar</Boton>
            </Form>
        );

    };

    const renderCard = () =>{
        return (
            <Draggable draggableId={String(id)}index={index}>
                {provided => (
                    <CardContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onDoubleClick={()=> setisEditar(true)}
                >
                    <Card>
                        <BotonEditar
                            onMouseDown={()=> setisEditar(true)}
                            fontSize="small"
                        >
                            Editar
                        </BotonEditar>
                        <BottonBorrar
                            fontSize="small" onMouseDown={handleBorrarCard}>                   
                            Borrar
                        </BottonBorrar>
                        <CardContent>
                            <Typography>{text}</Typography>
                        </CardContent>
                    </Card>
                </CardContainer>
            )}


            </Draggable>
        );
    };

            return isEditar ? renderEditarForm(): renderCard();
});

export default connect () (Card);