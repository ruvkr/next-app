import styled from 'styled-components';

export const Navbar: React.FC = () => {
  return <ScNav>Counter App</ScNav>;
};

const ScNav = styled.nav`
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
