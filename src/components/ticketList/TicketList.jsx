import React from "react";
import "./ticketlist.scss"
import Ticket from "../ticket"

const TicketList=()=>(
    <div className="tickets">
        <ul className="ticketlist">
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </ul>
    </div>
)

export default TicketList