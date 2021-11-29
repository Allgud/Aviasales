import React from "react";
import "./tabs.scss"
import FilterButton from "../filterButton"
import {filters} from "../../constants"

const Tabs=()=>{
    const filterValues=filters.map((value, i)=> (
        <FilterButton 
            key={i}
            value={value.toUpperCase()}
        />
    ))

    return (
        <div className="tabs">
            {filterValues}
        </div>
    )
}
    
export default Tabs