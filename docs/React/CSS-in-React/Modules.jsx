import CodeOutput from "@site/src/components/CodeOutput";
import React from "react";
import styled from "styled-components";

export function CSSModules1() {
	const Wrapper = styled.div`
		text-align: center;

		.title {
			color: red;
		}
	`;

	return (
		<CodeOutput title="CSS Modules 1">
			<Wrapper>
				<h1 className="title">CSS Modules</h1>
			</Wrapper>
		</CodeOutput>
	);
}

export function CSSModules2() {
	const Wrapper = styled.div`
		text-align: center;

		.title {
			color: red;
		}
		
		.MyTitle{
			background: green;
			color: black; // Forcing by the docusaurus theme
		}
	`;

	return (
		<CodeOutput title="CSS Modules 2">
			<Wrapper>
				<h1 className="title">CSS Modules</h1>
				<h2 className="MyTitle">MyTitle</h2>
			</Wrapper>
		</CodeOutput>
	);
}

export function SCSSModules() {
	const Wrapper = styled.div`
		text-align: center;

		.title {
			color: red;
		}
		
		.container {
			margin-top: 100px;
			padding-top: 10px;
			border: 1px solid black;

			.MyTitle {
				background: green;
				color: black;
			}

			h3 {
				color: blueviolet;
			}
		}
	`;

	return (
		<CodeOutput title="SCSS Modules">
			<Wrapper>
				<h1 className="title">CSS Modules</h1>
				<div className="container">
					<h2 className="MyTitle">MyTitle</h2>
					<h3>Sub title</h3>
				</div>
			</Wrapper>
		</CodeOutput>
	);
}
