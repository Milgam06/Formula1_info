import styled from "@emotion/styled";
import { TextProps } from ".";

export const TextElement = styled.span<TextProps>`
  font-size: ${({ size }) => size}rem;
  font-weight: ${({ weight }) => weight};
  color: ${(props) => props.color};
  align-items: center;
  cursor: pointer;
`;
