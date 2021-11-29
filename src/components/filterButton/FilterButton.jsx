import React from "react"
import "./filterButton.scss"

const FilterButton=({value})=>{
    return (
        <div className="tabs__element">
            <label>
                <input
                    type="radio" 
                    id="fastFilter" 
                    name="fastFilter"
                    onClick={()=>setActive(true)}
                />
                {value}
            </label>
        </div> 
    )
}
      
export default FilterButton