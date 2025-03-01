import React, {useState} from "react";
import Nav from "./Nav";
import PigTiles from "./PigTiles.js"

import hogs from "../porkers_data";

function App() {
	const [dispPigs, setDispPigs] = useState(hogs)
	const [selectedPig, setSelectedPig] = useState([])
	const [greasedBtnStatus, setGreasedBtnStatus] = useState(false)
	const [sortBtnStatus, setSortBtnStatus] = useState(false)
	// false = sort by name, true = sort by weight



	function onSetSelectedPig(newPigsArr) {
		setSelectedPig(newPigsArr)
	}
	function onGreasedClick(newStatus) {
		setGreasedBtnStatus(newStatus)
		const filteredPigs = hogs.filter((pig) => !newStatus || pig.greased === true)
		setDispPigs(filteredPigs)
	}
	function onSortNameClick(newStatus) {
		setSortBtnStatus(newStatus)
		const sortedPigs = dispPigs.sort((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA < nameB) {
				return -1
			} else {
				return 1
			}
		})
		setDispPigs(sortedPigs)
	}
	function onSortWeightClick(newStatus) {
		setSortBtnStatus(newStatus)
		const sortedPigs = dispPigs.sort((a, b) => a.weight - b.weight)
		setDispPigs(sortedPigs)
	}

	// const filteredPigs = hogs.filter((pig) => !greasedBtnStatus || pig.greased === true)
	// const sortType = sortBtnStatus ? "name" : "weight"
	// const sortedFilteredPigs = filteredPigs.sort((a, b) => a[sortType] - b[sortType])
	// console.log(sortedFilteredPigs)
	
	return (
		<div className="App">
			<Nav onGreasedClick={onGreasedClick} onSortNameClick={onSortNameClick} onSortWeightClick={onSortWeightClick} greasedBtnStatus={greasedBtnStatus} sortBtnStatus={sortBtnStatus} />
			<PigTiles data={dispPigs} selectedPig={selectedPig} onSetSelectedPig={onSetSelectedPig} />
		</div>
	);
}

export default App;
