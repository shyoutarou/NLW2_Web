import React, { useRef, useCallback, useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import { useAuth } from '../../contexts/auth';

import api from '../../services/api';

import './styles.css';

interface ProfileFormData {
  name: string;
  surname: string;
  email: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}


const Profile: React.FC = () => {

  const history = useHistory();
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const { user } = useAuth();

  const [schedules, setSchedules] = useState<Schedule[]>([
    { week_day: 0, from: '', to: '' },
])

function handleSubmit(e: FormEvent) {
  e.preventDefault();

  console.log(user)
  api.post('classes/', {  subject, cost: Number(cost), schedule: schedules,
  }).then(() => {

      toast.success(
          'Cadastro realizado com sucesso!',
        );

      history.push('/register-class-success');
  }).catch((err) => {
      toast.error('Ocorreu um erro ao fazer o cadastro');
  });
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

  const handleDeleteSchedule = (index: number, class_id: number) => {
    const newArray = schedules.filter((scheduleItem, scheduleIndex) => {
      return index !== scheduleIndex;
    });

    setSchedules(newArray);
  };

  const handleImageUpdate = useCallback(
    async (file: File) => {
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await api.put(
          `/profiles/avatar/${user?.id}`,
          formData,
        );

        toast.success('Avatar atualizado');
      } catch (e) {
        alert('erro ao atualizar sua imagem, tente novamente mais tarde!');
      }
    },
    [],
  );

  return (
    <div id="page-profile" className="container">
      <PageHeader title="" description="">
        <div className="profile-main-info">
          <div className="profile-image">
            <img
              src={`${process.env.REACT_APP_API_URL}/uploads/${user?.avatar}`}
              alt="user"
              className="profile-image-picture"
            />
            <label htmlFor="file" className="change-image">
            </label>
            <input
              onChange={e => {
                if (e.target.files) {
                  handleImageUpdate(e.target.files[0]);
                }
              }}
              id="file"
              type="file"
              hidden
            />
          </div>
          <h3>{user?.name}</h3>
          {user?.email && <h2>{user?.email}</h2>}
        </div>
      </PageHeader>

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="name-item">
              <Input name="name" label="Nome" />
              <Input name="surname" label="Sobrenome" />
            </div>

            <div className="mail-number-item">
              <Input type="email" name="email" label="E-mail" />
              <Input name="whatsapp" label="Whatsapp" />
            </div>

            <Textarea
              name="bio"
              label="Biografia (Máximo 300 caracteres)"
              maxLength={300}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
                label="Custo da sua hora por aula"
                placeholder="R$"
              ></Input>
            </div>
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis</legend>

            {schedules?.map((schedule, index) => {
              return (
                <div key={index}>
                  <div className="schedule-item">
                    <Select
                      name={`schedule[${index}].week_day`}
                      label="Dia da semana"
                      defaultValue={schedule.week_day}
                      onChange={e =>
                        setScheduleItemValue(index, 'week_day', e.target.value)
                      }
                      options={[
                        { id: '0', value: 'Domingo' },
                        { id: '1', value: 'Segunda-Feira' },
                        { id: '2', value: 'Terça-Feira' },
                        { id: '3', value: 'Quarta-Feira' },
                        { id: '4', value: 'Quinta-Feira' },
                        { id: '5', value: 'Sexta-Feira' },
                        { id: '6', value: 'Sabado' },
                      ]}
                      disabled
                    ></Select>
                    <div className="schedule-time">                                   
                        <Input
                            name="from"
                            label="Das"
                            type="time"
                            value={schedule.from}
                            required
                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />

                        <Input
                        name="to"
                        label="Até"
                        type="time"
                        value={schedule.to}
                        required
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                        />
                    </div>
                  </div>
                  <div className="delete-schedule">
                    <hr></hr>
                    <h4
                      onClick={() =>
                        handleDeleteSchedule(index, schedule.week_day)
                      }
                      className="delete-schedule"
                    >
                      Excluir horário
                    </h4>
                  </div>
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default Profile;
