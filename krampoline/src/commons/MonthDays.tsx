import { RegisterType } from 'recoil/registerState';

interface DaysProps {
  day: Date;
  index: number;
  className: string;
}

interface CurrentDaysProps extends DaysProps {
  setProtectionDate: (
    valOrUpdater: RegisterType | ((currVal: RegisterType) => RegisterType),
  ) => void;
  handleClick: () => void;
}

interface NextMonthDaysProps extends DaysProps {
  nextMonth: (month: number) => void;
}

interface PrevMonthDaysProps extends DaysProps {
  prevMonth: (month: number) => void;
}

export const CurrentMonthDays = ({
  day,
  index,
  className,
  setProtectionDate,
  handleClick,
}: CurrentDaysProps) => {
  return (
    <td key={index} className={className}>
      <button
        className="w-full h-full"
        onClick={() => {
          const date = `${day.getFullYear()}-${
            day.getMonth() + 1
          }-${day.getDate()}`;
          setProtectionDate((prev) => ({
            ...prev,
            protectionExpirationDate: date,
          }));
          handleClick();
        }}
      >
        {day.getDate()}
      </button>
    </td>
  );
};

export const PrevMonthDays = ({
  day,
  index,
  className,
  prevMonth,
}: PrevMonthDaysProps) => {
  const currentDate = new Date();

  return (
    <td key={index} className={className}>
      <button
        className="w-full h-full"
        onClick={() => {
          prevMonth(currentDate.getMonth());
          // 날짜 클릭 연도 문제 해결해야 됨
        }}
      >
        {day.getDate()}
      </button>
    </td>
  );
};

export const NextMonthDays = ({
  day,
  index,
  className,
  nextMonth,
}: NextMonthDaysProps) => {
  const currentDate = new Date();

  return (
    <td key={index} className={className}>
      <button
        className="w-full h-full"
        onClick={() => {
          nextMonth(currentDate.getMonth());
          // 날짜 클릭 연도 문제 해결해야 됨 -> day.getMonth() 고려해보기
        }}
      >
        {day.getDate()}
      </button>
    </td>
  );
};
