import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	margin-top: 16px;
	font-size: 20px;
	padding: 8px;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	max-width: 250px;
	margin-top: 16px;
	display: flex;
	align-items: center;
	gap: 4px;
`;

const Button = styled.button`
	flex: 1;
	font-size: 20px;
	padding: 8px;
`;

const ClueButton = styled(Button)`
  margin-top: 8px;
`;

const Output = styled.div`
  margin-top: 16px;
  font-size: 20px;
`;

const QuitButton = styled(Button)`
  margin-top: 8px;
  background-color: #f44336;
  color: white;
`;

const AttemptsList = styled.ul`
  margin-top: 16px;
  font-size: 20px;
`;

export function GuessTheNumberV1() {
	function rng() {
		return Math.floor(Math.random() * 11);
	}

	const [hiddenNumber, setHiddenNumber] = useState(rng());
	const [attempts, setAttempts] = useState(0);
	const [guess, setGuess] = useState(0);

	useEffect(() => console.log(hiddenNumber), [hiddenNumber]);

	const handleGuessSubmit = () => {
		const guessNumber = parseInt(guess);
		let output = { icon: "", title: "", text: "" };

		if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > 10) {
			output = {
				icon: "error",
				title: "ERROR!",
				text: "Please enter a valid number between 0 and 10",
			};

		} else if (guessNumber === hiddenNumber) {
			output = {
				icon: "success",
				title: "Nice!",
				text: `Congratulations! You guessed the number in ${attempts + 1} attempts.`,
			};
			setAttempts(0);

		} else if (guessNumber < hiddenNumber) {
			output = {
				icon: "warning",
				title: "Try Again",
				text: "The hidden number is greater",
			};
			setAttempts(attempts + 1);

		} else {
			output = {
				icon: "warning",
				title: "Try Again",
				text: "The hidden number is less",
			};
			setAttempts(attempts + 1);
		}

		Swal.fire(output);
	};

	return (
		<Container>
			<h2>Guess the Number V1</h2>
			<Input
				type="number"
				value={guess}
				onChange={(e) => setGuess(e.target.value)}
				placeholder="Enter your guess" />
			<ButtonsContainer>
				<Button onClick={handleGuessSubmit}>Submit</Button>
				<Button onClick={() => setHiddenNumber(rng())}>Restart</Button>
			</ButtonsContainer>
		</Container>
	);
}

export function GuessTheNumberV2() {
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(10);
	const [hiddenNumber, setHiddenNumber] = useState(Math.floor(Math.random() * (max - min + 1)) + min);
	const [attempts, setAttempts] = useState([]);
	const [guess, setGuess] = useState("");
	const [output, setOutput] = useState("");
	const [difficulty, setDifficulty] = useState("easy");

	useEffect(() => console.log(hiddenNumber), [hiddenNumber]);

	const handleDifficultySubmit = useCallback(() => {
		setHiddenNumber(Math.floor(Math.random() * (max - min + 1)) + min);
		setAttempts([]);
		setGuess("");
		setOutput("");
	}, [max, min]);

	const handleDifficultyChange = useCallback((event) => {
		const difficulty = event.target.value;
		setDifficulty(difficulty);
		switch (difficulty) {
			case "easy":
				setMin(0);
				setMax(10);
				break;
			case "normal":
				setMin(0);
				setMax(100);
				break;
			case "hard":
				setMin(0);
				setMax(1000);
				break;

			case "custom":
			default:
				break;
		}
		handleDifficultySubmit();
	}, [handleDifficultySubmit]);

	function handleGuessSubmit() {
		const guessNumber = parseInt(guess);
		if (isNaN(guessNumber) || guessNumber < min || guessNumber > max) {
			setOutput(`Please enter a valid number between ${min} and ${max}`);
		} else if (guessNumber === hiddenNumber) {
			setOutput(`Congratulations! You guessed the number in ${attempts.length + 1} attempts.`);
			setGuess("");
			setAttempts([]);
			setHiddenNumber(Math.floor(Math.random() * (max - min + 1)) + min);
		} else if (guessNumber < hiddenNumber) {
			setOutput("The hidden number is greater");
			setGuess("");
			setAttempts([...attempts, guessNumber]);
		} else {
			setOutput("The hidden number is less");
			setGuess("");
			setAttempts([...attempts, guessNumber]);
		}
	}

	function handleClueClick() {
		const midpoint = Math.floor((min + max) / 2);
		setOutput(`The midpoint is ${midpoint}`);
	}

	function handleQuitClick() {
		setOutput(`The hidden number was ${hiddenNumber}`);
		setGuess("");
		setAttempts([]);
		setHiddenNumber(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	return (
		<Container>
			<h2>Guess the Number V2</h2>
			<div>
				<label>
					Difficulty:
					<select onChange={handleDifficultyChange}>
						<option value="easy">Easy (0-10)</option>
						<option value="normal">Normal (0-100)</option>
						<option value="hard">Hard (0-1000)</option>
						<option value="custom">Custom</option>
					</select>
				</label>
			</div>

			{difficulty === "custom" && <div>
				<label>
					Min:
					<Input type="number" value={min} onChange={e => setMin(parseInt(e.target.value))} />
				</label>
				<label>
					Max:
					<Input type="number" value={max} onChange={e => setMax(parseInt(e.target.value))} />
				</label>
			</div>
			}
			<Button onClick={handleDifficultySubmit}>Submit Difficulty</Button>
			<div>
				<label>
					Guess:
					<Input type="number" value={guess} onChange={e => setGuess(e.target.value)} />
				</label>
				<Button onClick={handleGuessSubmit}>Submit Guess</Button>
			</div>
			<Output>{output}</Output>

			<ButtonsContainer>
				<ClueButton onClick={handleClueClick}>Clue</ClueButton>
				<QuitButton onClick={handleQuitClick}>Quit</QuitButton>
			</ButtonsContainer>

			{attempts.length > 0 && (
				<AttemptsList>
					{attempts.map((attempt, index) => (
						<li key={`${index}-${attempt}`}>{attempt}</li>
					))}
				</AttemptsList>
			)}
		</Container>
	);
}
