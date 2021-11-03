import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";


const Boton =({children, onclick}) =>{
    const StyledButton = styled(Button)`
    &&{
        color: white;
        background: #5aac44;
    }
    `;

    return(
        <StyledButton variant="contained" onMouseDown={onclick}>
            {children}
        </StyledButton>
    );

};
 

export default Boton; 