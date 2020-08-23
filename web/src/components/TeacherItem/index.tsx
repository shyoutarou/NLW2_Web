import React, { useState, useEffect } from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';
import TeacherItemTime from '../TeacherItemTime';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface Schedule {
  id: number;
  week_day: number;
  from: number;
  to: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  const [schedule, setSchedule] = useState<Schedule[]>([]);
  
  useEffect(() => {
    async function loadSchedule(): Promise<void> {
      const schedule = await api.get<Schedule[]>(
        `showSchedules/${teacher.id}`,
      );

      setSchedule(schedule.data);
    }
    loadSchedule();
  }, [teacher.id]);

  function handleCreateNewConnection() {
    api.post('connections', { user_id: teacher.id });
  }
  
    return (
        <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>


        <div className="schedules">
          <TeacherItemTime schedule={schedule} />
        </div>


        <footer>
          <p>
            Preço/Hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <a
            onClick={handleCreateNewConnection}
            href={`https://wa.me/${teacher.whatsapp}`}
            target="_blank"
          >
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </a>
        </footer>
      </article>
    )
}

export default TeacherItem;