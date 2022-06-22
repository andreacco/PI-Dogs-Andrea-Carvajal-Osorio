import React from "react";
import "./Pagination.css"

export default function Pagination ({ dogsPerPage, allDogs, paginate, currentPage }) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pages.push(i);
    }

    // 172/8 = 21.5 ---> con el math ceil, son 22 paginas

    
    return (
        <nav className="nav">
            <ul className="paginated">
                {pages && pages.map(num => (
                    <li className="number" key={num}>
                        <button className= {currentPage === num? "current" : "img"} onClick={() => paginate(num)}>{num}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}