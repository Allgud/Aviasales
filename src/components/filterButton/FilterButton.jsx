import React from "react"
import "./filterButton.scss"

const FilterButton=({value})=>(
    <span className="tabs__element">
        <input name="fastFilter" type="radio" />
        <label for="fastFilter">{value}</label>
    </span>   
)

export default FilterButton