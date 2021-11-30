import React from "react";
import "./content.scss"
import Tabs from "../tabs"
import SideFilter from "../sideFilter"
import TicketList from "../ticketList"
import Button from "../button";

const Content=()=>(
    <div className="content">
        <aside>
            <SideFilter />
        </aside>
        <main>
            <Tabs />
            <TicketList/>
            <Button />
        </main>
    </div>
)

export default Content