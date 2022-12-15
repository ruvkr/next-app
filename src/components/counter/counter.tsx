import { useState } from 'react';
import styled from 'styled-components';

export type CounterProps = {
  children: (props: CounterChildProps) => JSX.Element | null;
};

export type CounterChildProps = {
  count: number;
  setCount: (newValue: number | ((value: number) => number)) => void;
};

export const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ScCount>Count: {count}</ScCount>
      {children({ count, setCount })}
    </>
  );
};

const ScCount = styled.h1`
  margin: 0;
`;
