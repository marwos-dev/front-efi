import React from "react";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { Card } from "@material-ui/core";


const Form = React.memo(

    ({list,text = " ", onChange,CerrarForm, children }) =>{
        const placeholder =list
        ? "Ingrese un titulo.."
        : "Ingrese un titulo para esta card..";

        const Container = styled.div`
        width: 300px;
        margin-bottom: 8px;
        `;

        const StyledCard = styled(Card) `
         min-height: 85px;
         padding: 6px 8px 2px;
        `;

        const StyledTextArea = styled(Textarea) `
        resize: none;
        width: 100%;
        overflow: hidder;
        outline:none;
        border:none;
        
        `;

        const ButtonContainer = styled.div`
        margin-top: 8px;
        display: flex;
        align-items: center;
        margin- left: 8px;
                
        `;

        const StyledIcon = styled(Icon)`
        margin-left: 8px;
        cursor: pointer;
        `;

            return (
                <Container>
                    <StyledCard>
                        <StyledTextArea
                            placeholder={placeholder}
                            autoFocus
                            value={text}
                            onChange={e => onChange(e)}
                            onBlur={CerrarForm}

                        />
                    </StyledCard>
                    <ButtonContainer>
                        {children}
                        <StyledIcon onMouseDown={CerrarForm}>Cerrar</StyledIcon>
                    </ButtonContainer>
                
                </Container>
            );

    }
);


export default Form;