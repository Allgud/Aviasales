import React from "react";
import "./ticket.scss"
import logo from "../../images/s7.png"

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
                <table className="route">
                    <thead>
                        <tr>
                            <th>MOW – HKT</th>
                            <th>В пути</th>
                            <th>1 пересадка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11:20 – 00:50</td>
                            <td>13ч 30м</td>
                            <td>HKG</td>
                        </tr>
                    </tbody> 
                </table>
                <table className="route">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    </li>
)

export default Ticket