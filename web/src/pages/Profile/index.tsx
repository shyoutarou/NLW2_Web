import React, { useCallback, useState, FormEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import avatardefault from '../../assets/images/avatar.jpg';
import warningIcon from '../../assets/images/icons/warning.svg';
import cameraIcon from '../../assets/images/icons/camera.svg'
import { useAuth } from '../../contexts/auth';

import api from '../../services/api';
import formatTime from '../../utils/formatTime';

import './styles.css';
import SelectWeekday from '../../components/SelectWeekday';
import SelectSubjects from '../../components/SelectSubjects';

interface Schedule {
  class_id: number,
  subject_id: number
  subject: string;
  week_day: number;
  from: number;
  to: number;
}

interface Subjects {
  id: number;
  value: string;
  cost: string;
}

const Profile: React.FC = () => {

  const history = useHistory();

  const { user, updateUser } = useAuth();

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [usersschedules, setusersschedules] = useState<Schedule[]>([])
  const [subjects, setSubjects] = useState<Subjects[]>([])

  useEffect(() => {

      const sessiontoken = sessionStorage.getItem('@proffy:token')
   
      if(sessiontoken) {
          
          api.defaults.headers.authorization = `Bearer ${sessiontoken}`

              setName(user.name as string)
              setSurname(user.surname as string)
              setEmail(user.email as string)
              setAvatar(user.avatar as string)
              setWhatsapp(user.whatsapp as string)
              setBio(user.bio as string)
              setSubject(user.subject as string)
              setCost(user.cost as string)
              // setSchedules(user.schedules as Schedule[])
              // setSubjects(user.subjects as Subjects[])

              api.get(
                `showSubjects/${user.id}`,
              ).then(res => {
                setSubjects(res.data)

                console.log(res.data)

              }).catch(e => { history.push('/loginerror')})

              api.get(
                `showSchedules/${user.id}`,
              ).then(res => {

                setusersschedules(res.data)

              }).catch(e => history.push('/loginerror'))

      } else {
          history.push('/')
      }
  }, [history, user])

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

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
          await api.put(`/profiles/avatar/1`,formData,
          );

          toast.success('Avatar atualizado');
      } catch (e) {
        toast.error('Erro ao atualizar sua imagem');
      }
    },
    [],
  );

  
  async function handleSubjects(value: string) {

    setSubject(value)
    console.log(value)
    const filteredschedules = usersschedules.filter((scheduleItem, scheduleIndex) => {
      return scheduleItem.subject_id === Number(value);
    });

    const filteredsubjects = subjects.filter((subjectItem, subjectIndex) => {
      return subjectItem.id === Number(value);
    });
    

    setSchedules(filteredschedules)
    setCost(filteredsubjects[0].cost)

    try {
      // if (isAble()) {
      //   await signIn( email, password, rememberPassword);
      // }
    } catch (err) {
        toast.error('Ocorreu um erro ao fazer login, cheque as credenciais');
    }
  }

  return (
    <div id="page-profile" className="container">
      <PageHeader title="" uppertitle="Meu Perfil" description="">
        <div className="profile-main-info">
          <div className="profile-image">
            <img src={user && user.avatar ? user?.avatar : avatardefault} 
            alt="Avatar" 
            className="profile-image-profile"/>
            <div className="image-upload">
              <label htmlFor="file" className="change-image">
                <img src={cameraIcon}
                    alt="Ícone Camera"
                    className="camera-icon"/>
              </label>
              <input id="file" type="file" hidden
                    onChange={e => {
                      if (e.target.files) {
                        handleImageUpdate(e.target.files[0]);
                      }
                    }} />
            </div>            
          </div>
          <h3>{name + " " + surname}</h3>
          {email && <h2>{email}</h2>}
        </div>
      </PageHeader>

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="name-item">
              <Input name="name" label="Nome" value={name || ''}
                     required onChange={(e) => setName(e.target.value)} />
              <Input name="surname" label="Sobrenome" value={surname || ''}
                     required onChange={(e) => setSurname(e.target.value)} />
            </div>

            <div className="mail-number-item">
              <Input type="email" name="email" label="E-mail" value={email || ''}
                     required onChange={(e) => setEmail(e.target.value)}  />
              <Input name="whatsapp" label="Whatsapp" type="tel"
                  accept="number" pattern="^\+(?:[0-9] ?){6,14}[0-9]"
                  value={whatsapp || ''}
                  onChange={(e) => setWhatsapp(e.target.value)} />
            </div>

            <Textarea
              name="bio" maxLength={300}
              label="Biografia (Máximo 300 caracteres)"
              value={bio || ''}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <div className="about-item">
              <SelectSubjects 
                  value={subject}
                  required
                  onChange={(e) => handleSubjects(e.target.value)}
                  options={subjects}  />
                                       
              <Input
                name="cost"
                value={cost}
                type="number" min="0.00" max="10000.00" step="5.00"
                label="Custo da sua hora por aula"
                placeholder="R$"
              ></Input>
            </div>
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis</legend>

            {schedules.map((scheduleItem, index) => {
              return (
                <div key={index}>
                  <div className="schedule-item">

                    <SelectWeekday 
                            name="week_day"
                            label="Dia da Semana"
                            value={scheduleItem.week_day}
                            required
                            onChange={(e: any) => setScheduleItemValue(index, 'week_day', e.target.value)} />

                    <div className="schedule-time">                                   
                        <Input
                            name="from"
                            label="Das"
                            type="time"
                            value={formatTime(scheduleItem.from)}
                            required
                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />

                        <Input
                        name="to"
                        label="Até"
                        type="time"
                        value={formatTime(scheduleItem.to)}
                        required
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                        />
                    </div>
                  </div>
                  <div className="delete-schedule">
                    <hr></hr>
                    <h4
                      onClick={() =>
                        handleDeleteSchedule(index, scheduleItem.week_day)
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
