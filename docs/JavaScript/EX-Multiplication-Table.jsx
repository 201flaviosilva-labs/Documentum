import React, { useState } from "react";

// Based on: https://bitbucket.org/201flaviosilva-labs/javascript-exercises/src/gh-pages/Dom/MultiplicationTable/
function MultiplicationTable() {
	const [number, setNumber] = useState(0);
	const [rows, setRows] = useState([]);
	const max = 10;

	function onSubmit(event) {
		event.preventDefault();

		const r = [];
		for (let i = 1; i < max + 1; i++) {
			r.push(
				<tr key={i}>
					<td>{number}</td>
					<td>*</td>
					<td>{i}</td>
					<td>=</td>
					<td>{number * i}</td>
				</tr>
			);
		}

		setRows(r);
	}


	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>
					<span>Number to multiply:</span>
					<input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
				</label>

				<button type="submit">Calc</button>
			</form>

			<table>
				<thead>
					<th>Multiplier</th>
					<th>*</th>
					<th>Multiplying</th>
					<th>=</th>
					<th>Result</th>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default MultiplicationTable;
