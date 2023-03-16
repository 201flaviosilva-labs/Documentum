import React from "react";
import styled, { keyframes } from "styled-components";

export default function StarWarsRoll() {
	const slide = keyframes`
		0% {
			top: 100%;
			opacity: 1;
		}

		90% {
			opacity: 1;
		}

		100% {
			top: 0;
			opacity: 0;
		}
	`;

	const Wrapper = styled.div`
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 10;
  	`;

	const Container = styled.div`
		margin: 0;
		height: 960px;
		width: 50%;
		position: absolute;
		top: auto;
		bottom: 0;
		left: 50%;
		color: #ffff66;
		font-size: 40px;
		transform-origin: center bottom;
		transform: perspective(800px) rotateX(45deg) translateX(-50%);
		user-select: none;
		pointer-events: none;

		div {
			position: absolute;
			animation-duration: 40s;
			animation-name: ${slide};
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}
  	`;

	return (
		<Wrapper>
			<Container>
				<div>
					<p>
						Em uma galáxia muito distante,
						uma velha profecia era cantada
						mas apenas por aqueles que sabiam
						os seus significados mais perfundos,
						sempe que a cantiva começava
						algo estava por vir !!
					</p>
					<p>
						"
						Gira que gira lá anda o moinho
						com suas velas de altura sem par /
					</p>
					<p>
						E lá no monte reside sozinho
						á luz do sol e á luz do luar.
						"
					</p>
					<p>
						O início acabou de começar
						o que está por vir é inserto
						mas podemos esperar algo que não
						estávamos à espera, em temos de
						profecias não se limpam armas
						e todo o cuidado é pouco,
						como sempre se disse,
						"Um olho no peixe e outro no gato"
					</p>
					<p>-----</p>
					<p>
						PS. Isto agora é apenas um texto
						para ocupar espaço, para o efeito
						ficar super fixe.
						Eu sei que poderia usar o lorem
						e até com o VS Code que tem uma
						função interessante que cria
						um lorem por nós para ser bem mais
						simples que estar a ir procurar na net
						mas eu achei por bem escrever por mim
						este textinho.
					</p>
				</div>
			</Container>
		</Wrapper>
	);
}
