import React, { useState } from "react";

export default function Quiz({ questions }) {
	const correctStyle = { color: "green", };
	const wrongStyle = { color: "red", };

	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	function handleAnswer(questionIndex, selectedOption) {
		const newAnswers = [...selectedAnswers];
		newAnswers[questionIndex] = selectedOption;
		setSelectedAnswers(newAnswers);
	}

	function handleSubmit() {
		console.clear();
		if (selectedAnswers.length < questions.length) return alert("You are missing some questions!");

		const correctSum = selectedAnswers.reduce((acc, cur, questionIndex) => {
			const { options, answer } = questions[questionIndex];
			acc += options[cur] === answer ? 1 : 0;
			return acc;
		}, 0);

		alert(`${(correctSum / questions.length) * 100}%`);

		setHasSubmitted(true);
	}

	return (
		<div>
			{questions.map((question, index) => (
				<div key={index}>
					<h3>{question.question}</h3>
					{question.options.map((option, optionIndex) => (
						<div key={optionIndex}>
							<label>
								<input
									type="radio"
									name={`question-${index}`}
									value={optionIndex}
									onChange={() => handleAnswer(index, optionIndex)}
									checked={selectedAnswers[index] === optionIndex}
									disabled={hasSubmitted}
								/>
								<span
									style={
										hasSubmitted ? (option === question.answer ? correctStyle : wrongStyle) : {}
									}
								>{option}</span>
							</label>
						</div>
					))}
				</div>
			))}

			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
