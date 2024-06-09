import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
`;

export const MainPageContentContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  /* padding: 2rem 3rem; */
`;
