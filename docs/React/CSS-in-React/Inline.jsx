import CodeOutput from "@site/src/components/CodeOutput";
import React, { useState } from "react";

export function Inline1() {
	return (
		<CodeOutput title="Inline Style">
			<div style={{ backgroundColor: "blue", color: "white" }}>Inline Style</div>
		</CodeOutput>
	);
}

export function DynamicInline1() {
	const [cor, setCor] = useState("blue");

	return (
		<CodeOutput title="Dynamic Inline Style">
			<div style={{ backgroundColor: cor }}>
				<button onClick={() => setCor("red")}>Change Color</button>
			</div>
		</CodeOutput>
	);
}

export function DynamicInline2() {
	const [num, setNum] = useState(0);

	return (
		<CodeOutput title="Dynamic Inline Style">
			<div style={num < 0 ? { backgroundColor: "red" } : { backgroundColor: "green" }}>
				<p>Number: {num}</p>
				<button onClick={() => setNum(num + 1)}>Add</button>
				<button onClick={() => setNum(num - 1)}>Remove</button>
			</div>
		</CodeOutput>
	);
}

export function DynamicInline3() {
	const [num, setNum] = useState(0);

	function getColor() {
		if (num > 0) return "green";
		else if (num < 0) return "red";
		else return "blue";
	}

	const style = {
		border: `${num}px dashed black`,
		backgroundColor: getColor(),
	};

	return (
		<CodeOutput title="Dynamic Inline Style">
			<div style={style}>
				<p>Number: {num}</p>
				<button onClick={() => setNum(num + 1)}>Add</button>
				<button onClick={() => setNum(num - 1)}>Remove</button>
			</div>
		</CodeOutput>
	);
}
