import React from "react";
import { Icon } from "@material-ui/core";
import styled from "styled-components";


const AbrirForm = ({list, children,onclick}) =>{
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor= list ? "white" : "inherti";
    const buttonTextBackground = list ? "rgba ( 0,0,0,.15" : "inherti";

    const AbrirFormButton = styled.div `
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity}
    color: ${buttonTextColor}
    background-color: ${buttonTextBackground};
    `;

    return (
        <AbrirFormButton onClick={onclick}>
            <Icon>
                Agregar
            </Icon>
            <p style={{flexShrink:0}}>{children}</p>
        </AbrirFormButton>
    );
};

export default AbrirForm;