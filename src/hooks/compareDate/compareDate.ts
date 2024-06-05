export interface CompareDateProps {
  ISODate: string | number | Date | undefined;
}

export const compareDate = ({ ISODate }: CompareDateProps) => {
  if (ISODate != undefined) {
    const date = new Date(ISODate);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - date.getTime();
    const diffInHour = timeDiff / (1000 * 3600);
    return diffInHour.toFixed(1);
  } else {
    return null;
  }
};
