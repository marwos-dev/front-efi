import {CONSTANTS} from "../actions";

export const agregarCard = (listId,Text ) => {
    return {
        type: CONSTANTS.AGREGAR_CARD,
        payload: {Text,listId}
    };
};

export const editarCard = (id,listId,newText) => {
    return{
        type: CONSTANTS.EDITAR_CARD,
        payload: {id,listId,newText}
    };
};

export const borrarCard = (id,listId) =>{
    return{
        type: CONSTANTS.BORRAR_CARD,
        payload: {id,listId}
    };
};