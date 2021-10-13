import { classNames } from "@emotion/react";
import { Typography } from "@mui/material";
import { Classes } from "@material-ui/styles/mergeClasses/mergeClasses";

import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
 
const card =()=>{
    return (
        <Card classNames={Classes.Card}>
            <Typography gutterBottom >
              Trabajos del dia
            </Typography>
            
        </Card>


    );
};

export default Card;