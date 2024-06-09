import { MotionProps } from "framer-motion";

import { Text } from "..";
import * as S from "./styled";

export interface ButtonProps {
  children: React.ReactNode;
  isBackgroundImg?: boolean;
  backgroundImg?: string;
  isVertical?: boolean;
  animationProps?: MotionProps;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isVertical,
  isBackgroundImg,
  backgroundImg,
  animationProps,
}) => {
  return (
    <>
      <S.ButtonContainer
        isBackgroundImg={isBackgroundImg}
        backgroundImg={backgroundImg}
        onClick={onClick}
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.2 },
        }}
        {...animationProps}
      >
        <S.ButtonContentContainer isVertical={isVertical}>
          <Text size={isVertical ? 6.6 : 4.6} weight={isVertical ? 900 : 600}>
            {children}
          </Text>
        </S.ButtonContentContainer>
      </S.ButtonContainer>
    </>
  );
};
