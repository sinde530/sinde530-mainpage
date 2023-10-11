import styled from '@emotion/styled';

const HeaderContainer = styled.div({
  backgroundColor: '#333',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
});

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Vite + React</h1>
    </HeaderContainer>
  );
}
