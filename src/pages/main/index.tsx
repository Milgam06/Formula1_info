import { FormulaDatas } from "@/api";

export const MainPage: React.FC = () => {
  const formula = new FormulaDatas();

  const respone = formula.getSessionStatus();
  console.log(respone);
  return (
    <>
      <h1>asdf</h1>
    </>
  );
};
