import React from "react";
import styled from "styled-components";

export default function CodeOutput({ children, title, bodyPadding = 4, bodyBackground = "white" }) {
	const YELLOW = "#eec64c";
	const GREY = "#45494F";

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		margin: 10px 0;
		background: ${bodyBackground};
		border: 2px solid ${GREY};
		border-radius: 4px;
		box-shadow: 0 0 2px ${YELLOW}, 0 0 4px ${YELLOW}, 0 0 8px ${YELLOW};
	`;

	const Header = styled.div`
		background: ${GREY};
		padding: 2px 4px;
	`;

	const Body = styled.div`
		flex: 1;
		padding: ${bodyPadding}px;
	`;

	return (
		<Wrapper title="Output">
			{title && <Header>{title}</Header>}
			<Body>{children}</Body>
		</Wrapper>
	);
}
