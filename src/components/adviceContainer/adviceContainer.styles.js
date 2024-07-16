import styled from 'styled-components';

const StyledAdviceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	width: 343px;
	height: 347px;
	margin: 120px auto;
	background-color: #4f5d74;
	border-radius: 10px;
	@media (min-width: 768px) {
		width: 540px;
		height: 364px;
	}
`;
export { StyledAdviceContainer };
