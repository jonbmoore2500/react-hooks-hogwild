import React from "react";
import Buttons from "./Buttons.js"
import piggy from "../assets/porco.png";

const Nav = ({greasedBtnStatus, sortBtnStatus, onGreasedClick, onSortNameClick, onSortWeightClick}) => {
	
	function onGreasedClickNav(newStatus) {
		onGreasedClick(newStatus)
	}
	function onSortClickNav(newStatus) {
		if (newStatus) {
			onSortNameClick(newStatus)
		} else {
			onSortWeightClick(newStatus)
		}
	}
	
	
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<Buttons greasedBtnStatus={greasedBtnStatus} sortBtnStatus={sortBtnStatus} onGreasedClick={onGreasedClickNav} onSortClick={onSortClickNav}/>
		</div>
	);
};

export default Nav;
