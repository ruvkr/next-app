import styled from 'styled-components';

export type ControllerProps = {
  setCount: (newValue: number | ((value: number) => number)) => void;
};

export const Controller: React.FC<ControllerProps> = ({ setCount }) => {
  return (
    <ScContainer>
      <button onClick={() => setCount(count => count + 1)}>Increase (+1)</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease (-1)</button>
    </ScContainer>
  );
};

const ScContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  max-width: 400px;
`;
