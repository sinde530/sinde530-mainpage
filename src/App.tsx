import styled from '@emotion/styled';

const Container = styled.div({
  padding: '20px',
  minHeight: '100vh',
});

const HeaderContainer = styled.div({
  backgroundColor: '#333',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
});

const FlexContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
});

const SidebarContainer = styled.div({
  backgroundColor: '#ddd',
  minWidth: '340px',
  maxWidth: '340px%',
  padding: '10px',
  color: '#000',
});

const ContentContainer = styled.div({
  width: '100%',
  padding: '10px',
  backgroundColor: '#eee',
  color: '#000',
});

const FooterContainer = styled.div({
  backgroundColor: '#555',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  marginTop: '20px',
});

export default function App() {
  return (
    <Container>
      <HeaderContainer>
        <h1>Vite + React</h1>
      </HeaderContainer>

      <FlexContainer>
        <SidebarContainer>Sidebar</SidebarContainer>
        <ContentContainer>Content</ContentContainer>
      </FlexContainer>

      <FooterContainer>Footer</FooterContainer>
    </Container>
  );
}
