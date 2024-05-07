import { useState } from "react";

import { useIntervalStore } from "@/store/interval";

export const Livebar: React.FC = () => {
  const { intervalStatus } = useIntervalStore();
  console.log(intervalStatus, "asdf");
  return (
    <>
      <h1>asdf</h1>
    </>
  );
};
