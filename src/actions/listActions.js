
import {CONSTANTS} from "../actions";

export const agregarList = title =>{
    return {
        type:CONSTANTS.AGREGAR_LIST,
        payload:title
    };
};

export const sort =(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexEnd,
            droppableIndexStart,
            draggableId,
            type
        }
    };
};


export const editarTitulo=(listID,newTitle) => {
    return {
        type: CONSTANTS.EDITAR_TITULO_LISTA,
        payload: {
            listID,
            newTitle
        }
    };

};

