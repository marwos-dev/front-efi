// import loremIpsum from "lorem-ipsum";
import { CONSTANTS } from "../actions";

let listID = 2;
let CardID = 6;

// const lorem = new loremIpsum({
//     sentencesPerParagraph: {
//         max:8,
//         min:1
//     },
//     wordsPerSentence:{
//         max:16,
//         min:1
//     }
// });

const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `list-${k}`,
        title: `list ${k}`,
        cards: [...new Array(k)].map((_, index) =>
       "adjfeo" )
        
    }));

const StateInicial = getItems(10);

const listReducer = (state= StateInicial,action) => {
    switch (action.type) {
        case CONSTANTS.AGREGAR_LISTA:
            const nuevaLista ={
                title:action.payload,
                cards:[],
                id:`list-${listID}`
            };

            listID +=1
            return[...state,nuevaLista];

        case CONSTANTS.AGREGAR_CARD:{
            const nuevaCard ={
                text: action.payload.text,
                id:`card-${CardID}`
            };
            CardID+=1;

            console.log("accion recibida",action);

            const nuevoEstado = state.map(list => {
                if (list.id === action.payload.listID){
                    return{
                        ...list,
                        cards: [...list.cards, nuevaCard]
                    };
                } else {
                    return list;
                }
            });
            
            return nuevoEstado
        }
    
        case CONSTANTS.DRAG_HAPPENED:
            const{
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId,
                type
            } = action.payload;
            const nuevoEstado = [...state];

            // arrastrar las listas

            if (type=== "list" ){
                const list = nuevoEstado.splice(droppableIndexStart,1);
                nuevoEstado.splice(droppableIndexEnd,0 ,...list);
                return nuevoEstado;
            }
            
            //en la misma lista

            if (droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            //otra lista

            if (droppableIdStart !== droppableIdEnd){
                //buscar la lista en el arrastre
                const listStart = state.find(list => droppableIdStart === list.id);

                //sacar la card de la lista

                const card = listStart.cards.splice(droppableIndexStart,1);

                //encontrar la card donde se termino de arrastrar

                const listEnd = state.find(list=> droppableIdEnd === list.id);

                //poner la card en la nueva lista

                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
  
            return nuevoEstado;
            
            case CONSTANTS.EDITAR_CARD:{ 
                const {id, listID,newText} = action.payload;
                return state.map(list => {
                    if(list.id === listID){
                        const nuevaCard= list.cards.filter(card => card.id !== id);
                        return { ...list, cards: nuevaCard};
                    } else{
                        return list;
                    }
                });

            }
            case CONSTANTS.BORRAR_CARD:{
                const {id,listID}= action.payload;
                return state.map(list => {
                    if (list.id === listID){
                        const nuevaCard =list.cards.filter(card => card.id !==id);
                        return {...list, cards : nuevaCard};
                    } else{
                        return list;
                    }
                });
            }

            case CONSTANTS.EDITAR_TITULO_LISTA:{
                const { listID,nuevoTituloLista} = action.payload;
                return state.map(list => {
                    if (list.id === listID){
                        list.title = nuevoTituloLista;
                        return list;
                    } else{
                        return list;
                    }
                });
            }
            default:
                return state;
        }

}; 

export default listReducer;

