import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Based on: https://bitbucket.org/201flaviosilva-labs/javascript-exercises/src/gh-pages/Dom/CounterTimer/
export default function CounterTimer() {
	const Wrapper = styled.div`
		width: 500px;
		padding: 4px 0;
		background-color: rgba(255, 255, 255, 0.5);
		
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			color: black;
			font-family: "Courier New", Courier, monospace;
		}

		button {
			outline: none;
			cursor: pointer;
		}

		header {
			text-align: center;
		}

		main {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 10px;

			p {
				width: 75%;
				padding: 4px 0;
				font-size: 20px;
				text-align: center;
				font-weight: bold;
				background-color: yellow;
				border: 1px solid black;
				border-radius: 6px;
				cursor: wait;
			}

			div {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;
		
				button {
					width: 33%;
					padding: 4px 0;
					margin-top: 10px;
					border: 1px solid black;
					border-radius: 4px;
					font-size: 22px;
					font-weight: bold;
					transition: 0.5s;

					&.Start{
						background: green;
					}

					&.Reset {
						background: red;
					}
					
					&:hover {
						transform: scale(1.1);
						&:active {
							transform: scale(0.95);
						}
					}
				}
			}
		}
  	`;

	const [isStarted, setIsStarted] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const timerIntervalRef = useRef(null);

	function update() {
		setSeconds((prevSeconds) => {
			let newSeconds = prevSeconds + 1;
			if (newSeconds >= 60) {
				newSeconds = 0;
				setMinutes((prevMinutes) => {
					let newMinutes = prevMinutes + 1;
					if (newMinutes >= 60) {
						newMinutes = 0;
						setHours((prevHours) => prevHours + 1);
					}
					return newMinutes;
				});
			}
			return newSeconds;
		});
	}

	function handleStartClick() {
		if (!isStarted) {
			timerIntervalRef.current = setInterval(update, 1000);
			setIsStarted(true);
		} else {
			clearInterval(timerIntervalRef.current);
			setIsStarted(false);
		}
	}

	function handleResetClick() {
		clearInterval(timerIntervalRef.current);
		setIsStarted(false);
		setSeconds(0);
		setMinutes(0);
		setHours(0);
	}

	useEffect(() => {
		return () => clearInterval(timerIntervalRef.current);
	}, []);


	return (
		<Wrapper>
			<header>
				<h1>Counter Timer</h1>
			</header>

			<main>
				<p className="Timer">
					{hours < 10 ? "0" + hours : hours}:
					{minutes < 10 ? "0" + minutes : minutes}:
					{seconds < 10 ? "0" + seconds : seconds}
				</p>

				<div>
					<button className="Start" onClick={handleStartClick}>{isStarted ? "Stop" : "Start"}</button>
					<button className="Reset" onClick={handleResetClick}>Reset</button>
				</div>
			</main>
		</Wrapper>
	);
}
