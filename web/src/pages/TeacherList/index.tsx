import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';
import { toast } from 'react-toastify';
import SelectWeekday from '../../components/SelectWeekday';
import SelectSubjects from '../../components/SelectSubjects';

function TeacherList()
{
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');


    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        try {

            const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
            });
        
            setTeachers(response.data);

        } catch (err) {
            toast.error('Ocorreu um erro ao listar professores!');
        }

      }
      
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader icon = "smile"
                        title="Estes são os proffys disponíveis.">
                <form onSubmit={searchTeachers} id="search-teachers">

                    <SelectSubjects 
                        value={subject}
                        required
                        onChange={(e: any) => setSubject(e.target.value)} />

                    <SelectWeekday 
                        value={week_day}
                        required
                        onChange={(e: any) => setWeek_day(e.target.value)} />
                    <Input
                        type="time"
                        name="time"
                        required
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
                {teachers.length === 0 ? 
                <div className="no-results">
                    <h2>Nenhum professor encontrado com sua pesquisa</h2>
                </div> : 
                    teachers.map((teacher: Teacher) => (
                        <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher} />
                    ))
                }                
            </main>
        </div>
    )
}

export default TeacherList;