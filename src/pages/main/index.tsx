import { useEffect, useState } from "react";

// import { getSessionData, SessionDataTypes } from "@/api";
import { IntervalDataTypes, getIntervalData } from "@/api";
import { Button, Livebar } from "@/components";
import { useIntervalStore } from "@/store/interval";
import * as S from "./styled";

export const MainPage: React.FC = () => {
  const [sessionStatus, setSessionStatus] = useState<IntervalDataTypes>();
  const { intervalStatus } = useIntervalStore();
  useEffect(() => {
    // const fetchData = async () => {
    //   const respone = await getSessionData({
    //     sessionLatestStatus: true,
    //   });
    //   setSessionStatus(respone);
    // };
    const fetchData = async () => {
      const respone = await getIntervalData({
        sessionLatestStatus: true,
      });
      setSessionStatus(respone);
    };
    fetchData();
  }, []);
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
        <S.MainPageContentContainer>
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
