import { useEffect, useState } from "react";

import { getSessionStatus, SessionDataTypes } from "@/api";
import { Button } from "@/components";
import * as S from "./styled";

export const MainPage: React.FC = () => {
  const [sessionStatus, setSessionStatus] = useState<SessionDataTypes>();

  useEffect(() => {
    const fetchData = async () => {
      const respone = await getSessionStatus({
        sessionLatestStatus: true,
      });
      setSessionStatus(respone);
    };
    fetchData();
  }, []);
  console.log(sessionStatus, "max");
  return (
    <>
      <S.MainPageContainer>
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
