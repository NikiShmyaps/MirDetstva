import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styles from './calendarComponent.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface ICalendarComponent {
	formik: any;
}

export const CalendarComponent: React.FC<ICalendarComponent> = ({ formik }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const formatDate = (date: Date): string => {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const year = date.getFullYear();
    
    return `${day}.${month}.${year}`;
  }

  const handleChangeDate = (e: any) => {
    setDate(e)

    formik.setFieldValue("date", formatDate(e));
  }

	return (
    <div className={cx('calendar')}>
      <Calendar
        onChange={handleChangeDate}
        value={date}
      />
      <p className={cx('calendar_text')}>
        <span className={cx('calendar_text-accent')}>Выбранная дата: </span>
        {formatDate(date)}
      </p>
    </div>
	)
}
