import React from "react"

function Buttons({greasedBtnStatus, sortBtnStatus, onGreasedClick, onSortClick}) {

    return (
        <div>
            <button onClick={() => onGreasedClick(!greasedBtnStatus)}>{greasedBtnStatus ? "Display Only Greased Pigs" : "Display All Pigs"}</button>
            <button onClick={() => onSortClick(!sortBtnStatus)}>{sortBtnStatus ? "Sort by Weight" : "Sort by Name"}</button>
        </div>
    )
}

export default Buttons