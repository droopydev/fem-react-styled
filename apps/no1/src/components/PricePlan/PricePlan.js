import styled, { css } from 'styled-components';
import icon from '../../assets/icon-music.svg';

const ComponentWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colours.neutral10};
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      display: inline-block;
    }
  `}
`;

const TextWrapper = styled.div`
  display: inline-block;
  margin-left: 1rem;
  text-align: left;
`;

const EntityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PricePlan = (props) => {
  const { price, title } = props;
  return (
    <ComponentWrapper>
      <EntityWrapper>
        <img src={icon} alt="Music Icon" />
        <TextWrapper>
          <h3>{title}</h3>
          <p>{price}</p>
        </TextWrapper>
      </EntityWrapper>
      <a href="/">Change</a>
    </ComponentWrapper>
  );
};

export default PricePlan;
