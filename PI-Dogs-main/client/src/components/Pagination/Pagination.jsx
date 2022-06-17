import React from "react";

export default function Pagination ({ dogsPerPage, allDogs, paginate }) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pages.push(i);
    }

    // 172/8 = 21.5 ---> con el math ceil, son 22 paginas

    
    return (
        <nav>
            <ul className="paginate">
                {pages && pages.map(num => (
                    <li className="numbers" key={num}>
                        <p onClick={() => paginate(num)}>{num}</p>
                    </li>
                ))}
            </ul>
        </nav>
    )
}