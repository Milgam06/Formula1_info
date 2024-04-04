import { useEffect, useState } from "react";

import { FormulaDatas } from "@/api";

export const MainPage: React.FC = () => {
  const formula = new FormulaDatas();
  const [sessionStatus, setSessionStatus] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const respone = await formula.getSessionStatus();
      setSessionStatus(respone);
    };
    fetchData();
  }, []);
  console.log(sessionStatus);
  return (
    <>
      <h1>asdf</h1>
    </>
  );
};
