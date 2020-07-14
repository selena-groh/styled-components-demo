import styled from "styled-components";

const Button = styled.button`
  ${({ theme }) => `
    cursor: pointer;
    background: transparent;
    border-radius: ${theme.borderRadius.large};
    border: 2px solid ${theme.colors.primary[0]};
    color: ${theme.colors.primary[0]};
    margin: ${theme.spacing[2]};
    padding: ${theme.spacing[2]} ${theme.spacing[4]};

    &:not(:disabled) {
      &:hover,
      &:focus {
        color: ${theme.colors.primary[1]};
        border: 2px solid ${theme.colors.primary[1]};
      }
    }
  `}

  ${({ variant, theme: { colors } }) => {
    if (variant === "primary") {
      return `
        background: ${colors.primary[0]};
        color: ${colors.white};
        &:not(:disabled) {
          &:hover,
          &:focus {
            background: ${colors.primary[1]};
            color: ${colors.white};
            border: 2px solid ${colors.primary[1]};
          }
        }
      `;
    } else if (variant === "secondary") {
      return `
        background: ${colors.secondary[0]};
        border: 2px solid ${colors.secondary[0]};
        color: ${colors.white};
        &:not(:disabled) {
          &:hover,
          &:focus {
            background: ${colors.secondary[1]};
            color: ${colors.white};
            border: 2px solid ${colors.secondary[1]};
          }
        }
      `;
    }
  }}
`;

export const PrimaryButton = styled(Button).attrs(props => ({
  variant: "primary"
}))``;

export default Button;
