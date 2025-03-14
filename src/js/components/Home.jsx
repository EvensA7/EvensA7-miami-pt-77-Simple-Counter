import React, {useState} from "react";
import Counter from "./Counter";

//create your first component
const Home = () => {
	let [seconds, setSeconds] = useState(0)

	setInterval (() => {
		setSeconds(seconds++)
	}, 20)

	return (
		<div className="text-center">
			<Counter seconds={seconds}/>
		</div>
	);
};

export default Home;