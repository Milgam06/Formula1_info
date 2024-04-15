import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface ButtonStyleProps {
  isLarge?: boolean;
  backgroundColor?: string;
}

export const ButtonContainer = styled(motion.div)<ButtonStyleProps>`
  background-color: ${(props) => props.backgroundColor || "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ButtonContentContainer = styled.div<ButtonStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.isLarge ? "84rem" : "30rem")};
  height: ${(props) => (props.isLarge ? "24rem" : "14rem")};
  border: 1px solid #000;
  /* gap: 1rem; */
`;
