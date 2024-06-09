import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface ButtonStyleProps {
  isVertical?: boolean;
  isBackgroundImg?: boolean;
  backgroundImg?: string;
}

export const ButtonContainer = styled(motion.div)<ButtonStyleProps>`
  ${(props) =>
    props.isBackgroundImg
      ? `
      background-repeat : no-repeat;
      background-size : cover;
      background-position: center;
      background-image: ${props.backgroundImg};
  `
      : `background-color: #fff`};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.6rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ButtonContentContainer = styled.div<ButtonStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.isVertical ? "20rem" : "32rem")};
  height: ${(props) => (props.isVertical ? "40rem" : "14rem")};
`;
