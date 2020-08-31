import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SelectWeekday from '../../components/SelectWeekday';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import warningicon from '../../assets/images/icons/warning.svg';
import avatar from '../../assets/images/avatar.jpg';
import api from '../../services/api';
import { toast } from 'react-toastify';

import './styles.css';
import { useAuth } from '../../contexts/auth';
import SelectSubjects from '../../components/SelectSubjects';

interface Schedule {
    id?: number
    week_day: string
    from: string;
    to: string;
  }

function TeacherForm()
{
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [summary, setSummary] = useState('')
    const history = useHistory();

    const { user } = useAuth();
    const sessiontoken = sessionStorage.getItem('@proffy:token')

    useEffect(() => {

        api.defaults.headers.authorization = `Bearer ${sessiontoken}`
        api.get(`classes/${user.id}`).catch((err) => {

            console.log(err.response.status);


            if (err.response.status === 401) {
                toast.error('Você não tem permissão para acessar essa página.')
                history.push('/')
            } else if (err.response.status === 404) {
                toast.error('O conteúdo desta página não foi encontrado.')
                history.push('/')
            }
        });

        if (!sessiontoken) {
            history.push('/loginerror')
        }
    }, [history, user, sessiontoken])

    function validForm() {
        if (subject === '') return false
        if (cost === '' || Number(cost) < 0) return false
        for (let index in scheduleItems) {
          let scheduleItem = scheduleItems[index]
          if (scheduleItem.from >= scheduleItem.to) {
            return false
          }
        }
        return true
      }

    const [scheduleItems, setScheduleItems] = useState<Schedule[]>([
    { week_day: '', from: '', to: '' },
    ])

    
    // function addNewScheduleItem () {

    //     if (scheduleItems.length > 0)
    //         setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
    //     else
    //         setScheduleItems([{ week_day: 0, from: '', to: '' }])
    // }


    async function addNewScheduleItem() {
        // if (!!classID) {
        //   return api
        //     .post('/class-schedule', {
        //       class_id: classID,
        //     })
        //     .then((response) => {
        //       const scheduleItem = response.data
        //       return setScheduleItems([scheduleItem, ...scheduleItems])
        //     })
        //     .catch(() => {
        //       emitMessage('Não foi possível adicionar um novo horário.', 'error')
        //     })
        // }
    
        return setScheduleItems([
          { week_day: '', from: '', to: '' },
          ...scheduleItems,
        ])
      }


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    // const setScheduleItemValue = useCallback(
    //     (scheduleIndex: number, field: string, value: string) => {
    //         setSchedules(state => {
    //         return state.map((item, index) =>
    //             index === scheduleIndex ? { ...item, [field]: value } : item,
    //         );
    //         });
    //     },
    //     [],
    // );


    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        if (!validForm()) {
            toast.error('Seu formulário de cadastro está incorreto!')
          }

        api.defaults.headers.authorization = `Bearer ${sessiontoken}`
        api.post('classes/', { user_id: user.id,  
            subject_id: subject, 
            cost: Number(cost), 
            schedule: scheduleItems,
        }).then(() => {

            toast.success('Classe cadastrada com sucesso');
            history.push('/give-classes');
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
                                {user && user.avatar ? (
                                    
                                    <img src={user?.avatar} 
                                    alt="avatar" 
                                    className="page-teacher-profile"/>

                                ) : (

                                    <img
                                    src={avatar}
                                    alt="Avatar"/>

                                )}
                                <h3>{user?.name}</h3>
                            </div>

                            <Input
                            name="whatsapp"
                            label="Whatsapp"
                            width="300px"
                            readOnly
                            value={user.whatsapp}
                            />
                        </div>
                        <Textarea 
                        name="bio" 
                        label="Biografia"
                        readOnly
                        value={user.bio}
                        />
                    </fieldset>                
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <div className="about-item">

                        <SelectSubjects 
                            value={subject}
                            required
                            onChange={(e: any) => setSubject(e.target.value)} />
                        
                        <Input
                            name="cost"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                            type="number" min="0.00" max="10000.00" step="5.00"
                            label="Custo da hora por aula"
                            placeholder="R$"
                        ></Input>

                        </div>

                        <Textarea
                            label="Sumário"
                            name="summary"
                            value={summary}
                            required
                            onChange={(e) => {
                                setSummary(e.target.value)
                            }}
                            />
                    </fieldset>                    
                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}> 
                            + Novo horário
                            </button>
                        </legend>

                        { scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} 
                                className="schedule-item">


                                <SelectWeekday 
                                    name="week_day"
                                    label="Dia da Semana"
                                    value={scheduleItem.week_day}
                                    required
                                    onChange={(e: any) => setScheduleItemValue(index, 'week_day', e.target.value)} />

                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />                                
                                </div>
                            )
                        }) }

                        {/* {scheduleItems.map((scheduleItem, index) => (
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
                            
                        ))} */}
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