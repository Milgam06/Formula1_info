import React from "react";
import { Link } from "react-router-dom";

import { MENU_ITEMS_LIST } from "@/constant/menu";

import { Text } from "../..";
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
  return (
    <>
      <S.NavbarContainer variants={NavbarVars} initial="start" animate="end">
        <S.NavbarContentsContainer>
          <S.NavbarTitleWrapper variants={NavbarContentsVars}>
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Text size={3.4} weight={900} colors="#fff">
                FORMULA
              </Text>
            </a>
          </S.NavbarTitleWrapper>
          <S.NavbarMenuContainer>
            {MENU_ITEMS_LIST.map((item, key) => (
              <S.NavbarMenuWrapper
                key={key}
                variants={NavbarContentsVars}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  <Text size={2.4} weight={100} colors="#fff">
                    {item.title}
                  </Text>
                </Link>
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
