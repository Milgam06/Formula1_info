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

export const NavbarContentsContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  padding: 1rem 1rem;
`;

export const NavbarTitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  line-height: 1;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
`;

export const NavbarMenuContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  row-gap: 4.4rem;
`;

export const NavbarMenuWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
`;
