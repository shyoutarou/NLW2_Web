import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import warningicon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';
import { toast } from 'react-toastify';

import './styles.css';

interface Schedule {
    week_day: number;
    from: string;
    to: string;
  }

function TeacherForm()
{
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [schedules, setSchedules] = useState<Schedule[]>([
        {
          week_day: 0,
          from: '',
          to: '',
        },
      ]);

    const [classID, setclassID] = useState('');

    // const classID = useQuery().has('edit') ? useQuery().get('edit') : null

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''},
      ]);
    
    // function useQuery() {
    // return new URLSearchParams(useLocation().search)
    // }

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

    // function setScheduleItemValue(position: number, field: string, value: string) {
    //     const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
    //         if (index === position) {
    //             return {...scheduleItem, [field]: value };
    //         }
    //         return scheduleItem;
    //     });

    //     console.log( updatedScheduleItems);
    //     setScheduleItems(updatedScheduleItems);
    // }

    const history = useHistory();
    
    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', { name, avatar, whatsapp,
        bio, subject, cost: Number(cost), schedule: scheduleItems,
        }).then(() => {

            toast.success(
                'Cadastro realizado com sucesso!',
              );

        history.push('/');
        }).catch((err) => {
            toast.error('Ocorreu um erro ao fazer o cadastro');
        });
    }

    function handleDeleteClassSchedule(index: number) {
        if (scheduleItems.length > 1) {
          if (!!classID) {
            let initialSchedule = [...scheduleItems]
            return api
              .delete('/class-schedule', {
                params: {
                  // @ts-ignore
                  id: initialSchedule[index]['id'],
                },
              })
              .then(() => {
                initialSchedule.splice(index, 1)
                return setScheduleItems(initialSchedule)
              })
          } else {
            let initialSchedule = [...scheduleItems]
            initialSchedule.splice(index, 1)
            return setScheduleItems(initialSchedule)
          }
        }
     }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher o formulário de inscrição"
                >
            </PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                        name="name"
                        label="Nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />

                        <Input
                        name="avatar"
                        label="Avatar"
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                        />

                        <Input
                        name="whatsapp"
                        label="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />

                        <Textarea 
                        name="bio" 
                        label="Biografia"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aulas</legend>
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
                            ]} ></Select>
                        <Input  
                        name="cost" 
                        label="Custo da sua hora por aula" 
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                        ></Input>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários Disponívies
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
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
                            <img src={warningicon} alt="Avido Importante"/>
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