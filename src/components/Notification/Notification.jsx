import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const HeaderPart = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Notification = ({ children }) => (
  <Box display="flex" justifyContent="center">
    <HeaderPart>{children}</HeaderPart>
  </Box>
);

export default Notification;
