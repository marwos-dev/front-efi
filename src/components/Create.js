import React from "react";
import { Button, Icon } from "@material-ui/core";
import Boton from "./Boton";
import { connect } from "react-redux";
import { agregarList, agregarCard} from "../actions";
import styled from "styled-components";
import Form from "./Forms";
import AbrirForm from "./AbrirForm";

class Create extends React.PureComponent{
    state ={
        formOpen:false,
        text:""
    };

    AbrirForm = ()=>{
        this.setState({
            AbrirForm:true
        });
    };

    CerrarForm = e =>{
        this.setState({
            AbrirForm:false
        });
    };

    handleImputChange = e =>{
        this.setState({
            text: e.target.value
        });
    };

    handleAddList=()=>{
        const { dispatch} = this.props;
        const {text} = this.state;

        if (text){
            this.setState({
                text:""
            });
            dispatch(agregarList(text));
        }
        return;

    };

    handleAddCard = ()=> {
        const {dispatch,listID}=this.props;
        const{text}= this.state;

        if (text){
            this.setState({
                text:""
            });
            dispatch(agregarCard(listID,text));
        }
    };

    renderAbrirForm =() =>{
        const {list} = this.props;

        const botonText = list ? "Agregar otra lista" : "Agregar una card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherti";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherti";

        const AbrirFormBoton = styled.div`
        display: flex;
        aling-items:center;
        cursor: pointer;
        border-radius:3px;
        height:36px;
        margin-left:8px;
        width:300px;
        padding-left: 10 px;
        padding-rigth: 10px;
        opacity: ${buttonTextOpacity};
        color: ${buttonTextColor};
        backgroud-color: ${buttonTextBackground};
        `;

            return(
                <AbrirFormBoton onClick={this.AbrirForm}>
                    <Icon>Agregar</Icon>
                    <p style={{flexShrink:0}}>{botonText}</p>
                </AbrirFormBoton>
            );

    };

        render(){
            const {text} =this.state;
            const {list} = this.props;
            return this.state.AbrirForm ? (
                <Form 
                    text={text}
                    onChange= {this.handleImputChange}
                    CerrarForm={this.CerrarForm}
                >
                    <Button onClick={list ? this.handleAddList :this.handleAddCard}>
                        {list ? "Agregar Lista" : "Agregar Card"}
                    </Button>
                </Form>
           ) : (
                <AbrirForm list={list} onClick={this.AbrirForm}>
                    {list ?"Agregar otra lista" : "Agregar otra card"}
                </AbrirForm>
           );


        }

}


export default connect()(Create);