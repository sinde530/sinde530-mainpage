import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div({
  backgroundColor: '#ffffff',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #DDDDDD',
});

const Box = styled.div({
  display: 'flex',
});

const LogoText = styled.h1({
  color: '#000',
  padding: '16px 16px',
  fontSize: '18px',
});

const LinkTo = styled(Link)({
  margin: '16px 16px',
});

const Text = styled.p({
  color: '#000',
});

export default function Header() {
  return (
    <HeaderContainer>
      <Box>
        <Link to="/">
          <LogoText>Sinde530</LogoText>
        </Link>
      </Box>
      <Box>
        <LinkTo to="/account/service/signin">
          <Text>로그인</Text>
        </LinkTo>
      </Box>
    </HeaderContainer>
  );
}
