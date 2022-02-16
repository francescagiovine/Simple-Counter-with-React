//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="counterHeader">
			<div className="clock">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-clock-fill"
					viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
				</svg>
			</div>
			<div className="fifthSecond">{props.fifthDigit % 10}</div>
			<div className="fourthSecond">{props.fourthDigit % 10}</div>
			<div className="thirdSecond">{props.thirdDigit % 10}</div>
			<div className="secondSecond">{props.secondDigit % 10}</div>
			<div className="firstSecond">{props.firstDigit % 10}</div>
		</div>
	);
}
SimpleCounter.proptypes = {
	fifthDigit: propTypes.number,
	fourthDigit: propTypes.number,
	thirdDigit: propTypes.number,
	secondDigit: propTypes.number,
	firstDigit: propTypes.number,
};

let counter = 0;
setInterval(function () {
	const fifthSecond = Math.floor(counter / 10000);
	const fourthSecond = Math.floor(counter / 1000);
	const thirdSecond = Math.floor(counter / 100);
	const secondSecond = Math.floor(counter / 10);
	const firstSecond = Math.floor(counter / 1);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			firstDigit={firstSecond}
			secondDigit={secondSecond}
			thirdDigit={thirdSecond}
			fourthDigit={fourthSecond}
			fifthDigit={fifthSecond}
		/>,
		document.querySelector("#app")
	);
}, 1000);
