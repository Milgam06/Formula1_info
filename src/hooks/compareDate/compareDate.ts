export interface CompareDateProps {
  ISODate: string;
  targetDate: string;
}

export const useCompareDate = ({ ISODate, targetDate }: CompareDateProps) => {
  const date = new Date(ISODate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const commonDate = `${year}-${month}-${day}-${hours}-${minutes}`;
  console.log(commonDate, "commonDate");
  return commonDate;
};
