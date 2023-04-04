import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: black;

  form {
	display: flex;
  	flex-direction: column;
  }
`;

export function MathOperations() {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [operation, setOperation] = useState("+");
	const [result, setResult] = useState(0);

	function handleOperation(e) {
		e.preventDefault();

		let res = 0;
		switch (operation) {
			case "+":
				res = num1 + num2;
				break;
			case "-":
				res = num1 - num2;
				break;
			case "*":
				res = num1 * num2;
				break;
			case "/":
				res = num1 / num2;
				break;
			default:
				break;
		}

		setResult(res);
	}

	return (
		<Wrapper>
			<form onSubmit={handleOperation}>
				<label>
					<span>Number 1:</span>
					<input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
				</label>
				<label>
					<span>Number 2:</span>
					<input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
				</label>

				<label>
					Operação:
					<select value={operation} onChange={(e) => setOperation(e.target.value)}>
						<option value="+">Sum</option>
						<option value="-">Subtraction</option>
						<option value="*">Multiply</option>
						<option value="/">Division</option>
					</select>
				</label>

				<button type="submit">Calcular</button>
			</form>

			<p>Result: {result}</p>
		</Wrapper>
	);
}

