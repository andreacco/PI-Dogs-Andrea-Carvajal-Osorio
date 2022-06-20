import React from "react";

export default function Pagination ({ dogsPerPage, allDogs, paginate }) {
    const pages = [];
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pages.push(i);
    }

    // 172/8 = 21.5 ---> con el math ceil, son 22 paginas

    
    return (
        <nav>
            <ul>
                {pages && pages.map(num => (
                    <span key={num}>
                        <button onClick={() => paginate(num)}>{num}</button>
                    </span>
                ))}
            </ul>
        </nav>
    )
}