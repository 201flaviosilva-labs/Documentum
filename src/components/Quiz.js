import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

export default function Quiz({ questions }) {
	const correctStyle = { color: "green", };
	const wrongStyle = { color: "red", };

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		`;
	const Question = styled.div`
		margin: 8px 0;
		padding: 8px;
		border: 1px solid gray;
		border-radius: 4px;
		`;

	const SubmitBTN = styled.button`
		padding: 8px 4px;
		font-size: 20px;
		border: 1px solid white;
		border-radius: 4px;
	`;

	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	function handleAnswer(questionIndex, selectedOption) {
		const newAnswers = [...selectedAnswers];
		newAnswers[questionIndex] = selectedOption;
		setSelectedAnswers(newAnswers);
	}

	function handleSubmit() {
		if (selectedAnswers.length < questions.length) return Swal.fire({ icon: "info", title: "You are missing some questions!", });

		const correctSum = selectedAnswers.reduce((acc, cur, questionIndex) => {
			const { options, answer } = questions[questionIndex];
			acc += options[cur] === answer ? 1 : 0;
			return acc;
		}, 0);

		const percentage = (correctSum / questions.length) * 100;

		const icon = percentage > 75 ? "success" : "warning";
		const title = `${percentage > 75 ? "Nice!" : "Just that?!"} ${percentage}%`;

		Swal.fire({ icon, title });

		setHasSubmitted(true);
	}

	return (
		<Wrapper>
			{questions.map((question, index) => (
				<Question key={index}>
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
				</Question>
			))}

			<SubmitBTN onClick={handleSubmit}>Submit</SubmitBTN>
		</Wrapper>
	);
}
