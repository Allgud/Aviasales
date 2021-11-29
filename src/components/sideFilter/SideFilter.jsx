import React from "react"
import "./sideFilter.scss"
import FilterSet from "../filterSet"

const SideFilter=()=>(
    <div className="sidefilter">
        <div className="sidefilter__content">
            <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
            <FilterSet />
        </div>
    </div>
)

export default SideFilter