import React from "react"
import "./ticketinfo.scss"

const TicketInfo=()=>(
    <div className="route__description">
        <table>
            <thead>
                <tr className="table__row">
                    <td className="table__header">MOS - SPB</td>
                    <td className="table__header">В ПУТИ</td>
                    <td className="table__header">ПЕРЕСАДКИ</td>
                </tr>
            </thead>
            <tbody>
                <tr className="table__row">
                    <td className="table__content">11:00 - 13:00</td>
                    <td className="table__content">2ч</td>
                    <td className="table__content">TVR</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default TicketInfo