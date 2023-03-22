import CodeOutput from "@site/src/components/CodeOutput";
import React from "react";
import styled from "styled-components";

export function CSSGlobal1() {
	const Wrapper = styled.div`
		background-color: black;

		.title {
			color: red;
		}
	`;

	return (
		<CodeOutput title="Global CSS" bodyPadding={0}>
			<Wrapper>
				<h1 className="title">Global CSS</h1>
			</Wrapper>
		</CodeOutput>
	);
}

export function CSSGlobal2() {
	const Wrapper = styled.div`
		width: 100%;
		height: 100%;
		background-color: black;

		.title {
			color: red;
		}

		p {
			color: green;
		}

		.my-styled-p-1 {
			color: blue;
		}

		.my-styled-p-2 {
			color: yellow;
		}
	`;

	return (
		<CodeOutput title="Global CSS" bodyPadding={0}>
			<Wrapper>
				<h1 className="title">Global CSS</h1>
				<p>General styled p 1</p>
				<p className="my-styled-p-1">With class 1</p>
				<p>General styled p 2</p>
				<p className="my-styled-p-2">With class 2</p>
			</Wrapper>
		</CodeOutput>
	);
}
