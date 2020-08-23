import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import warningicon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';
import { toast } from 'react-toastify';

import './styles.css';
import { useAuth } from '../../contexts/auth';

interface Schedule {
    week_day: number;
    from: string;
    to: string;
  }

function TeacherForm()
{
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const history = useHistory();

    const [schedules, setSchedules] = useState<Schedule[]>([
        { week_day: 0, from: '', to: '' },
    ])

    const { user } = useAuth();

    useEffect(() => {
        const token = sessionStorage.getItem('@proffy:token');

        if (!token) {
            history.push('/loginerror')
        }
    }, [])

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''},
      ]);
    
    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems,
          { week_day: 0, from: '', to: '' }
        ]);
      }

    const setScheduleItemValue = useCallback(
        (scheduleIndex: number, field: string, value: string) => {
            setSchedules(state => {
            return state.map((item, index) =>
                index === scheduleIndex ? { ...item, [field]: value } : item,
            );
            });
        },
        [],
    );
    
    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes/', {  subject, cost: Number(cost), schedule: scheduleItems,
        }).then(() => {

            toast.success(
                'Cadastro realizado com sucesso!',
              );

            history.push('/register-class-success');
        }).catch((err) => {
            toast.error('Ocorreu um erro ao fazer o cadastro');
        });
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher o formulário de inscrição"
                icon = "rocket"
                >
            </PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <div className="page-teacher-info">
                            <div className="page-teacher-info-user">
                                <img src={user?.avatar} alt="avatar" className="page-teacher-profile"/>
                                <h3>{user?.name}</h3>
                            </div>

                            <Input
                            name="whatsapp"
                            label="Whatsapp"
                            width="300px"
                            value={user?.whatsapp}
                            />
                        </div>
                        <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={user?.bio}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aulas</legend>
                        <div className="about-item">
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
                            <Input  
                            name="cost" 
                            label="Custo da hora por aula" 
                            placeholder="R$"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                            ></Input>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}> + Novo horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                name="week-day"
                                label="Dia da Semana"
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                options={[
                                    { id: '0', value: 'Domingo' },
                                    { id: '1', value: 'Segunda-Feira' },
                                    { id: '2', value: 'Terça-Feira' },
                                    { id: '3', value: 'Quarta-Feira' },
                                    { id: '4', value: 'Quinta-Feira' },
                                    { id: '5', value: 'Sexta-Feira' },
                                    { id: '6', value: 'Sabado' },
                                ]}
                                />
                                <div className="schedule-time">                                   
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        required
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                        />

                                    <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                    value={scheduleItem.to}
                                    required
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
     
                            </div>
                            
                        ))}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningicon} alt="Aviso Importante"/>
                            Importante!<br/>
                            Preencha todos os campos                        
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;