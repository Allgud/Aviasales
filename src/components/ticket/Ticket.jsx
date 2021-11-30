import React from "react";
import "./ticket.scss"
import logo from "../../images/s7.png"
import TicketInfo from "../ticketInfo"

const Ticket=()=>(
    <li className="ticket__item">
        <div className="ticket">
            <div className="ticket--header">
                <span className="price">13 400</span>
                <span className="company">
                    <img className="company--logo" src={logo} alt="#" />
                </span>
            </div>
            <div className="ticket--info">
                <TicketInfo />
                <TicketInfo />
            </div>
        </div>
    </li>
)

export default Ticket