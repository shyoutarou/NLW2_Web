import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';
import TeacherItemTime from '../TeacherItemTime';
import formatValue from '../../utils/formatValue';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  surname: string;
  subject: string;
  whatsapp: string;
  schedules: Schedule[];
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

  function handleCreateNewConnection() {
    api.post('connections', { user_id: teacher.id });
  }
  
    return (
        <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name + " " + teacher.surname}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>


        <div className="schedules">
          <TeacherItemTime schedule={teacher.schedules} />
        </div>


        <footer>
          <p>
            Preço/Hora
            <strong>{formatValue(teacher.cost)}</strong>
          </p>
          <a
            onClick={handleCreateNewConnection}
            href={`https://wa.me/${teacher.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </a>
        </footer>
      </article>
    )
}

export default TeacherItem;