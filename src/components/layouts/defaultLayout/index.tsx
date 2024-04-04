import { Navbar } from "@/components";
import * as S from "./styled";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <S.DefaultLayoutContainer>{children}</S.DefaultLayoutContainer>
    </>
  );
};
