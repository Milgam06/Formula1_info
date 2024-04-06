import React from "react";
import { Text } from "..";
import * as S from "./styled";

const NavbarVars = {
  start: {
    x: -50,
  },
  end: {
    x: 0,
    transition: {
      duration: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const NavbarContentsVars = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export const Navbar: React.FC = () => {
  const MenuArray = ["latest", "driver", "session"];
  return (
    <>
      <S.NavbarContainer variants={NavbarVars} initial="start" animate="end">
        <S.NavbarContentsContainer>
          <S.NavbarTitleWrapper variants={NavbarContentsVars}>
            <Text size={3.2} weight={900} colors="#fff">
              FORMULA
            </Text>
          </S.NavbarTitleWrapper>
          <S.NavbarMenuContainer>
            {MenuArray.map((item, key) => (
              <S.NavbarMenuWrapper key={key} variants={NavbarContentsVars}>
                <Text size={2.8} weight={100} colors="#fff">
                  {item}
                </Text>
              </S.NavbarMenuWrapper>
            ))}
          </S.NavbarMenuContainer>
          <Text size={0.8} weight={100} colors="#fff">
            asdfasdfasdf
          </Text>
        </S.NavbarContentsContainer>
      </S.NavbarContainer>
    </>
  );
};
