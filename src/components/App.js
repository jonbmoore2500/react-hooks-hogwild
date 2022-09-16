import React, {useState} from "react";
import Nav from "./Nav";
import PigTiles from "./PigTiles.js"

import hogs from "../porkers_data";

function App() {
	const [selectedPig, setSelectedPig] = useState([])
	const [greasedBtnStatus, setGreasedBtnStatus] = useState(false)
	const [sortBtnStatus, setSortBtnStatus] = useState(false)
	// false = sort by name, true = sort by weight



	function onSetSelectedPig(newPigsArr) {
		console.log(selectedPig)
		setSelectedPig(newPigsArr)
	}
	function onGreasedClick(newStatus) {
		setGreasedBtnStatus(newStatus)
	}
	function onSortClick(newStatus) {
		setSortBtnStatus(newStatus)
	}

	

	
	return (
		<div className="App">
			<Nav onGreasedClick={onGreasedClick} onSortClick={onSortClick} greasedBtnStatus={greasedBtnStatus} sortBtnStatus={sortBtnStatus}/>
			<PigTiles data={hogs} selectedPig={selectedPig} onSetSelectedPig={onSetSelectedPig} />
		</div>
	);
}

export default App;
