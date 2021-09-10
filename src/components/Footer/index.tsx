import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/PMall09" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/priyankamall" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
        <Styled.Link href="https://scholar.google.com/citations?hl=en&user=Y2xabEMAAAAJ" rel="noreferrer noopener" target="_blank">
          Google Scholar
        </Styled.Link>
        <Styled.Link href="https://www.instagram.com/priyanka.m09" rel="noreferrer noopener" target="_blank">
          Instagram
         </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
