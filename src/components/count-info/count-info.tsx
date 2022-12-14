import styled from 'styled-components';

export type CountInfoProps = {
  count: number;
};

export const CountInfo: React.FC<CountInfoProps> = ({ count }) => {
  return <ScContainer>CountInfo: {count}</ScContainer>;
};

export const ScContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  gap: 16px;
  max-width: 400px;
`;
