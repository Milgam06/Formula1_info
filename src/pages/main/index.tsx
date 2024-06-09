import { Button, Livebar } from "@/components";
import { useIntervalStore } from "@/store/interval";
import { BackgroundRace, BackgroundTeam } from "@/assets";
import * as S from "./styled";

const MainPageVars = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const MainPageContentsVars = {
  start: {
    y: 40,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

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
          variants={MainPageVars}
          initial="start"
          animate="end"
        >
          <Button
            onClick={() => console.log("clicked")}
            isVertical={true}
            isBackgroundImg={false}
            animationProps={{ variants: MainPageContentsVars }}
          >
            race
          </Button>
          <Button
            onClick={() => console.log("clicked")}
            isVertical={true}
            isBackgroundImg={true}
            backgroundImg="url(src/assets/BackgroundRace.jpeg)"
            animationProps={{ variants: MainPageContentsVars }}
          >
            race
          </Button>
          <Button
            onClick={() => console.log("clicked")}
            isVertical={true}
            isBackgroundImg={false}
            animationProps={{ variants: MainPageContentsVars }}
          >
            asdfr
          </Button>
        </S.MainPageContentContainer>
      </S.MainPageContainer>
    </>
  );
};
