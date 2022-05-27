import { func } from "prop-types";
import React, { useState, useEffect } from "react";

//include images into your bundle
import { Counter } from "./Counter.js";
import { Timer } from "./Timer.js";

//create your first component
const Home = () => {
	var counter = 0;
	let [one, setOne] = useState(0);
	let [two, setTwo] = useState(0);
	let [three, setThree] = useState(0);
	let [four, setFour] = useState(0);
	useEffect(() => {
		setInterval(function () {
			setOne(Math.floor((counter / 1000) % 10));
			setTwo(Math.floor((counter / 100) % 10));
			setThree(Math.floor((counter / 10) % 10));
			setFour(Math.floor((counter / 1) % 10));
			counter++;
		}, 1000);
	}, [setOne, setTwo, setThree, setFour]);

	let [youWant, setYouWant] = useState(0);
	useEffect(() => {
		if (youWant == 0) return;
		setTimeout(() => {
			setYouWant(youWant - 1);
		}, 1000);
	}, [youWant]);
	return (
		<>
			<div className="bg-dark d-flex justify-content-center">
				<Counter fourN={four} threeN={three} twoN={two} oneN={one} />
			</div>
			<div className="bg-dark d-flex justify-content-around">
				<Timer theValue={youWant} setTheValue={setYouWant} />
				<Counter fourN={youWant} threeN={0} twoN={0} oneN={0} />
			</div>
		</>
	);
};

export default Home;
