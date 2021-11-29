import React from "react";
import "./filterItem.scss"

const FilterItem=({value})=>(
    <li className="filter__item">
        <label htmlFor="filter">
            <input type="checkbox" name="filter"/>{value}
        </label>
    </li>
)

export default FilterItem