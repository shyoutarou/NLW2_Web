import React from 'react';

import arrowIcon from '../../assets/images/icons/arrowTime.svg';

import formatTime from '../../utils/formatTime';

import { Schedule } from '../TeacherItem';

import './styles.css';

interface TeacherItemTimeProps {
  schedule: Schedule[];
}

const TeacherItemTime: React.FC<TeacherItemTimeProps> = ({ schedule }) => {
  function checkOccupyDay(day: number) {
    return schedule.findIndex(item => item.week_day === day) !== -1;
  }

  function getInitialHour(day: number) {
    const item = schedule.find(item => item.week_day === day);

    if (!item) {
      return 0;
    }

    return formatTime(item.from, false);
  }

  function getFinalHour(day: number) {
    const item = schedule.find(item => item.week_day === day);

    if (!item) {
      return 0;
    }

    return formatTime(item.to, false);
  }

  return (
    <ul>
      <li className="schedule-external-label">
        <span>Dia</span>
        <span>Horário</span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(1) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Segunda</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(1)
            ? `${getInitialHour(1)}h - ${getFinalHour(1)}h`
            : '-'}
        </span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(2) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Terça</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(2)
            ? `${getInitialHour(2)}h - ${getFinalHour(2)}h`
            : '-'}
        </span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(3) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Quarta</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(3)
            ? `${getInitialHour(3)}h - ${getFinalHour(3)}h`
            : '-'}
        </span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(4) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Quinta</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(4)
            ? `${getInitialHour(4)}h - ${getFinalHour(4)}h`
            : '-'}
        </span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(5) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Sexta</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(5)
            ? `${getInitialHour(5)}h - ${getFinalHour(5)}h`
            : '-'}
        </span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(6) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Sábado</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(6)
            ? `${getInitialHour(6)}h - ${getFinalHour(6)}h`
            : '-'}
        </span>
      </li>
      <li
        className={`schedules-item ${
          checkOccupyDay(0) ? '' : 'schedules-item-disabled'
        }`}
      >
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Domingo</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">
          {checkOccupyDay(0)
            ? `${getInitialHour(0)}h - ${getFinalHour(0)}h`
            : '-'}
        </span>
      </li>
    </ul>
  );
};

export default TeacherItemTime;
