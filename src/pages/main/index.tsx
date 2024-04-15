import { useEffect, useState } from "react";

import { FormulaDatas } from "@/api";
import { Button } from "@/components";
import * as S from "./styled";

export const MainPage: React.FC = () => {
  const formula = new FormulaDatas();
  const [sessionStatus, setSessionStatus] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const respone = await formula.getSessionStatus({
        sessionLatestStatus: true,
      });
      setSessionStatus(respone);
    };

    // const fetchData = async () => {
    // const respone = await formula.getIntervalStatus("1", {
    //   sessionLatestStatus: true,
    // });
    // setSessionStatus(respone);
    // };

    // const fetchData = async () => {
    //   const respone = await formula.getLapStatus("44");
    //   setSessionStatus(respone);
    // };

    // const fetchData = async () => {
    //   const respone = await formula.getPositionStatus("44");
    //   setSessionStatus(respone);
    // };
    // const fetchData = async () => {
    //   const respone = await formula.getCarStatus({ driverNumber: "44" });
    //   setSessionStatus(respone);
    // };

    fetchData();
  }, []);
  console.log(sessionStatus, "max");
  return (
    <>
      <S.MainPageContainer>
        <S.MainPageContentContainer>
          <Button onClick={() => console.log("clicked")} isLarge={true}>
            sdagf
          </Button>
          <Button onClick={() => console.log("clicked")} isLarge={false}>
            Click me
          </Button>
        </S.MainPageContentContainer>
      </S.MainPageContainer>
    </>
  );
};
