import React from "react";
import { Text } from "..";
import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavbarContainer>
        <S.NavbarContentsContainer>
          <S.NavbarTitleWrapper>
            <Text size={3} weight={800} colors="#fff">
              FORMULA
            </Text>
          </S.NavbarTitleWrapper>
          <S.NavbarMenuContainer>
            <span>Home</span>
            <span>Drivers</span>
            <span>Teams</span>
          </S.NavbarMenuContainer>
          afds
        </S.NavbarContentsContainer>
      </S.NavbarContainer>
    </>
  );
};
