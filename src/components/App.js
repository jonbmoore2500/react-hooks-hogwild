import React, {useState} from "react";
import Nav from "./Nav";
import PigTiles from "./PigTiles.js"

import hogs from "../porkers_data";

function App() {
	const [selectedPig, setSelectedPig] = useState([])
	
	function onSetSelectedPig(newPigsArr) {
		console.log(selectedPig)
		setSelectedPig(newPigsArr)
	}
	
	
	return (
		<div className="App">
			<Nav />
			<PigTiles data={hogs} selectedPig={selectedPig} onSetSelectedPig={onSetSelectedPig}/>
		</div>
	);
}

export default App;
