import React from "react";
import "./content.scss"
import Tabs from "../tabs"
import SideFilter from "../sideFilter"

const Content=()=>(
    <div className="content">
        <aside>
            <SideFilter />
        </aside>
        <main>
            <Tabs />
        </main>
    </div>
)

export default Content