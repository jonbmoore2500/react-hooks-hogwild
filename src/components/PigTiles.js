import React, {useState} from "react"

function PigTiles({data}) {
    



    return (
        <div className="pigtile">
            {data.map((hog) => (
                <div className="pigtile">
                    <h2>{hog.name}</h2>
                    <img src={hog.image}/>
                </div>
            ))}
        </div>
    )

}

export default PigTiles