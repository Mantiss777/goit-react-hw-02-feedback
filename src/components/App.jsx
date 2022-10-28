import styled from 'styled-components';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
import { Button } from './Button';
import { Box } from './Box';

const Header = styled.p`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const App = () => {
  return (
    <Box position="relative" as="main">
      <Box display="flex" justifyContent="flex-end" mt={4} as="section">
        <Header>Please leave feedback</Header>
      </Box>

      <Box as="section" mt={6}>
        <Button icon={HiArchive}>Good</Button>
        <Button icon={HiArrowCircleUp}>Netral</Button>
        <Button icon={HiBriefcase}>Bad</Button>
      </Box>
    </Box>
  );
};
