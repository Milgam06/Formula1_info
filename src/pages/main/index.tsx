import { Button, Livebar } from "@/components";
import { useIntervalStore } from "@/store/interval";
import * as S from "./styled";

export const MainPage: React.FC = () => {
  const { intervalStatus } = useIntervalStore();

  return (
    <>
      <S.MainPageContainer>
        {intervalStatus ? (
          <>
            <Livebar />
          </>
        ) : (
          <></>
        )}
        <S.MainPageContentContainer
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Button onClick={() => console.log("clicked")} isLarge={false}>
            asdfr
          </Button>
          <Button onClick={() => console.log("clicked")} isLarge={false}>
            asdfr
          </Button>
          <Button onClick={() => console.log("clicked")} isLarge={false}>
            asdfr
          </Button>
          <Button onClick={() => console.log("clicked")} isLarge={false}>
            Click me
          </Button>
        </S.MainPageContentContainer>
      </S.MainPageContainer>
    </>
  );
};
