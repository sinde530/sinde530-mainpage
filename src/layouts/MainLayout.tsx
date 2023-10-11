import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

const Container = styled.div({
  minHeight: '100vh',
});

const FlexContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
});

// const SidebarContainer = styled.div({
//   backgroundColor: '#ddd',
//   minWidth: '340px',
//   maxWidth: '340px',
//   padding: '10px',
//   color: '#000',
// });

export default function MainLayout() {
  return (
    <Container>
      <Header />

      <FlexContainer>
        {/* <SidebarContainer>Sidebar</SidebarContainer> */}
        <Outlet />
      </FlexContainer>

      <Footer />
    </Container>
  );
}
