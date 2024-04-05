import * as S from "./styled";

export interface TextProps {
  children: React.ReactNode;
  size: number;
  weight: number;
  colors?: string;
}

/**
 *
 * @param children : React.ReactNode
 * @param size : number
 * @param weight : number
 * @param colors? : string
 */
export const Text: React.FC<TextProps> = ({
  children,
  size = 1,
  weight = 300,
  colors = "black",
}) => {
  return (
    <>
      <S.TextElement size={size} weight={weight} color={colors}>
        {children}
      </S.TextElement>
    </>
  );
};
