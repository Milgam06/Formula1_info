import { MotionProps } from "framer-motion";

import { Text } from "..";
import * as S from "./styled";

export interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  isLarge?: boolean;
  animationProps?: MotionProps;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isLarge,
  backgroundColor,
}) => {
  return (
    <>
      <S.ButtonContainer
        backgroundColor={backgroundColor}
        onClick={onClick}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        <S.ButtonContentContainer isLarge={isLarge}>
          <Text size={isLarge ? 6.6 : 4.6} weight={isLarge ? 900 : 600}>
            {children}
          </Text>
        </S.ButtonContentContainer>
      </S.ButtonContainer>
    </>
  );
};
