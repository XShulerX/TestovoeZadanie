import React from "react";

const CardFilter = ({query, setQuery}) => {
    return (
        <div className="CardFilter">
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    );
};

export default CardFilter;
