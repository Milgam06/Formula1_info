import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const NavbarContainer = styled(motion.div)`
  width: 20rem;
  height: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #841613;
`;

export const NavbarContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const NavbarTitleWrapper = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding: 0 0.4rem;
  margin: 0 0.4rem;
`;

export const NavbarMenuContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
`;
