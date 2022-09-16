import React from "react"

function PigTiles({data, selectedPig, onSetSelectedPig}) {
    
    function handleInfoDisp(hogName) {
        let newPigInfo = [...selectedPig, hogName]
        onSetSelectedPig(newPigInfo)
    }
    function handleHideInfo(hogName) {
        let newPigInfo = selectedPig.filter((pig) => pig !== hogName)
        onSetSelectedPig(newPigInfo)
    }


    return (
        <div className="pigtile">
            {data.map((hog) => {
                if (selectedPig.includes(hog.name)) {
                    return (
                    <div className="pigtile" key={hog.name}>
                        <h2>{hog.name}</h2>
                        <img src={hog.image} alt={hog.name}/>
                        <button onClick={() => handleHideInfo(hog.name)}>Hide Info</button>
                        <h4>Specialty: {hog.specialty}</h4>
                        <h4>Weight: {hog.weight}</h4>
                        <h4>{hog.greased ? "Greased" : "Not Greased"}</h4>
                        <h4>Highest Medal Achieved: {hog["highest medal achieved"]}</h4>
                    </div>
                    )
                } else {
                return (
                <div className="pigtile" key={hog.name}>
                    <h2>{hog.name}</h2>
                    <img src={hog.image} alt={hog.name}/>
                    <button onClick={() => handleInfoDisp(hog.name)}>Show More</button>
                </div>
                )}
            })}
        
        </div>
    )

}

export default PigTiles