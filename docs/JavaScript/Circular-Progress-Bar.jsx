import React, { useState } from "react";
import styled from "styled-components";

export default function CircularProgressBar() {
	const [value, setValue] = useState(10);
	const COLORS = {
		white: "white",
		black: "black",
		yellow: "#eec64c",
		green: "#00ea95",
		blue: "#1859dd",
	};

	const Wrapper = styled.div`
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;

		* {
  			color: ${COLORS.white};
		}

		input,
		button,
		select {
			background-color: ${COLORS.black};
		}
  	`;

	const Container = styled.div`
		width: 250px;
    	height: 250px;
  	`;

	const OuterProgress = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid ${COLORS.blue};
		border-radius: 50%;
		background: conic-gradient(${COLORS.green} ${value / 100 * 360}deg, ${COLORS.black} 0);
  	`;

	const InnerProgress = styled.div`
		width: 90%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${COLORS.blue};
        border-radius: 50%;
        background-color: ${COLORS.black};
  	`;

	const Label = styled.label`
		gap: 10px;
    	display: flex;
    	align-items: center;
    	justify-content: center;
  	`;

	return (
		<Wrapper>
			<Container>
				<OuterProgress>
					<InnerProgress>
						<span>{value}%</span>
					</InnerProgress>
				</OuterProgress>
			</Container>

			<Label>
				<input
					type="range"
					min="0"
					max="100"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Label>
		</Wrapper>
	);
}
