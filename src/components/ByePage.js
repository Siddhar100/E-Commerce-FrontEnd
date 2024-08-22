import React from "react";
import ByeItem from "./ByeItem";
import { useLocation } from "react-router-dom";

const ByePage = (props) =>{
    const location = useLocation();
    return (
        <ByeItem  item_name={location.state.item_name} item_price={location.state.item_price}/>
    );
}
export default ByePage;