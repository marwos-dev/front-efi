// import { style } from "@mui/system";
import React from "react";
import Card from "./Card";

const List = ({title}) => {
    return (
        <div style={styles.container}>
        <h4>{title}</h4>
        <Card/>
        </div>
    )

};


const styles = {

    container:{
        backgroundColor:"#eee",
        borderRadius:3,
        width:300
    }

};

export default List;