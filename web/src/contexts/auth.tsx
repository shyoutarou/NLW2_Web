import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface User {
    success: boolean;
    id?: number;
    name?: string;
    surname?: string;
    avatar?: string;
    whatsapp?: string;
    bio?: string;
    email: string;
    password: string;
    subject: string;
    cost: string;
    subjects: Subjects[];
    schedules: Schedule[];
}

interface Subjects {
    id: string;
    value: string;
    cost: string;
}
  
interface Schedule {
    class_id: number;
    week_day: number;
    from: number;
    to: number;
}

interface AuthState {
    token: string;
    user: User;
  }

  
interface AuthContextData {
    signed: boolean;
    user: User;
    loading: boolean;
    signIn(email: string, password :string): Promise<void>;
    signOut(): void;
    updateUser(user: User): Promise<void>;
    handleToggleRemember(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FunctionComponent = ({ children }) => {
 
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState<AuthState>(() => {
        let token = localStorage.getItem('@Proffy:token');
    
        if (!token) {
          token = sessionStorage.getItem('@Proffy:token');
        }
    
        let user = localStorage.getItem('@Proffy:user');
    
        if (!user) {
          user = sessionStorage.getItem('@Proffy:user');
        }
    
        if (token && user) {
          api.defaults.headers.authorization = `Bearer ${token}`;
    
          return { token, user: JSON.parse(user) };
        }
    
        return {} as AuthState;
    });

    function handleToggleRemember(){
        setRemember(!remember);
    }

    async function signIn(email: string, password: string) {

 

        const login = await api.post('auth', {
            email,
            password,
          });


        const { token, user } = login.data;
        setLoading(true);

        api.defaults.headers.authorization = `Bearer ${token}`;

        const classes = await api.get(`classes/${user.id}`);

        if (classes.data[0]) {
          user.schedules = await api.get(`showSchedules/${user.id}`);
          user.subjects = await api.get(`showSubjects/${user.id}`);
        }

        if (remember) {
            localStorage.setItem('@proffy:token', token);
            localStorage.setItem('@proffy:user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('@proffy:token', token);
            sessionStorage.setItem('@proffy:user', JSON.stringify(user));
        }
    
        setData({ token, user });

    }

    function signOut() {

        localStorage.clear();
        sessionStorage.clear();
        setData({} as AuthState);
        // setUser(null);
        setLoading(true);
        
    }

    async function updateUser (user: User) {
        localStorage.setItem('@Proffy:user', JSON.stringify(user));
        sessionStorage.setItem('@Proffy:user', JSON.stringify(user));

        const classes = await api.get(`classes/${user.id}`);

        if (classes.data[0]) {
        user.subjects = classes.data;

        const schedules = await api.get(`classes/schedules/${user.id}`);

        user.schedules = schedules.data;
        }

        setData({
            token: data.token,
            user,
          });
    }

    return(

        <AuthContext.Provider value={{signed: !!data.token,user: data.user, loading, signIn, signOut, updateUser, handleToggleRemember}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
      }
      
    return context;
}


export {AuthProvider, useAuth} ;