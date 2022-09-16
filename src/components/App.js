import React, {useState} from "react";
import Nav from "./Nav";
import PigTiles from "./PigTiles.js"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigTiles data={hogs}/>
		</div>
	);
}

export default App;
