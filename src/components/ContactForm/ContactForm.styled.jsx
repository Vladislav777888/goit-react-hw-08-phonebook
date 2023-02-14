import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  margin-top: 3px;
  padding: 5px 15px;
`;

export const StyledButton = styled.button`
  margin-top: 10px;

  display: inline-flex;
  border-radius: ${p => p.theme.radii.normal};
  background-image: linear-gradient(
    ${p => p.theme.colors.blue} 50%,
    ${p => p.theme.colors.yellow} 50%
  );
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  :not(:first-child) {
    margin-top: 5px;
  }
`;

export const StyledForm = styled.form`
  margin-top: 10px;
`;
