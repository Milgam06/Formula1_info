import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LivebarContainer = styled(motion.div)`
  margin: 1rem 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 2rem;
  background: linear-gradient(to right, #841613, #fff);
`;

export const LivbarContentContainer = styled.div`
  width: 70rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  padding-left: 2rem;
`;
