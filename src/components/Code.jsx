import CodeBlock from "@theme/CodeBlock";
import React from "react";
import styled from "styled-components";

export default function Code({ children, language, title }) {
	const Container = styled.div`
		width: 100%;
		height: 100%;
	`;

	return (
		<Container>
			<CodeBlock
				language={language}
				title={title}
				showLineNumbers>
				{children}
			</CodeBlock>
		</Container>
	);
}
