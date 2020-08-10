import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList()
{
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
    
    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
    
        // console.log( teachers, subject, week_day, time)

        const response = await api.get('classes', {
          params: {
            subject,
            week_day,
            time,
          }
        });
    
        setTeachers(response.data);
      }
      
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form onSubmit={searchTeachers} id="search-teachers">
                    <Select
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            {id: "Artes", value:"Artes"},
                            {id: "Física", value:"Física"},
                            {id: "Biologia", value:"Biologia"},
                            {id: "Matemática", value:"Matemática"}
                        ]} >                            
                    </Select>
                    <Select
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => setWeek_day(e.target.value)}
                        options={[
                            {id: "0", value:"Domingo"},
                            {id: "1", value:"Segunda"},
                            {id: "2", value:"Terça"},
                            {id: "3", value:"Quarta"},
                            {id: "4", value:"Quinta"},
                            {id: "5", value:"Sexta"},
                            {id: "6", value:"Sábado"}                            
                        ]} >                            
                    </Select>                
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem 
                    key={teacher.id} 
                    teacher={teacher} />
                ))}
            </main>
        </div>
    )
}

export default TeacherList;