import { Controller } from '@components/controller';
import { CountInfo } from '@components/count-info';
import { Counter } from '@components/counter';
import { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <ScContainer>
      {/* Parent component */}
      <Counter>
        {({ count, setCount }) => (
          <>
            {/* Child component */}
            <Controller setCount={setCount} />
            {/* Sibling component */}
            <CountInfo count={count} />
          </>
        )}
      </Counter>
    </ScContainer>
  );
};

const ScContainer = styled.div`
  padding: 16px;
  display: grid;
  gap: 16px;
`;

export default Home;
