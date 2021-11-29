import React from "react"
import "./filterSet.scss"
import FilterItem from "../filterItem"
import {sideFilters} from "../../constants"

const FilterSet=()=>{
    const list=sideFilters.map((filter, index) => (
        <FilterItem 
            key={index}
            value={filter}
        />
    ))
    return(
        <ul className="filterset">
           {list} 
        </ul>
    )
}

export default FilterSet