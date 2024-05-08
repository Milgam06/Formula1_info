import { Text } from "../Text";

import * as S from "./styled";

export const Livebar: React.FC = () => {
  return (
    <>
      <S.LivebarContainer
        initial={{ y: -100, opacity: 50 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.4 }}
      >
        <S.LivbarContentContainer>
          <Text size={5} weight={600} colors="#fff">
            LIVE NOW
          </Text>
        </S.LivbarContentContainer>
      </S.LivebarContainer>
    </>
  );
};
