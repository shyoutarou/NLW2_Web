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
    signIn(email: string, password :string, remember: boolean): Promise<void>;
    signOut(): void;
    updateUser(user: User): Promise<void>;
    handleToggleRemember(token: string, user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FunctionComponent = ({ children }) => {
 
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState<AuthState>(() => {
        let token = localStorage.getItem('@proffy:token');
    
        if (!token) {
          token = sessionStorage.getItem('@proffy:token');
        }
    
        let Storageduser = localStorage.getItem('@proffy:user');
    
        if (!Storageduser) {
            Storageduser = sessionStorage.getItem('@proffy:user');
        }
    
        if (token && Storageduser) {
          api.defaults.headers.authorization = `Bearer ${token}`;
    
          return { token, user: JSON.parse(Storageduser) };
        }
    
        return {} as AuthState;
    });

    function handleToggleRemember(token: string, user: User){
        setData({ token, user });
    }

    async function signIn(email: string, password: string, remember: boolean) {

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

            console.log("localStoragetoken" + token)
            console.log("localStorageuser" + JSON.stringify(user))
        } else {
            sessionStorage.setItem('@proffy:token', token);
            sessionStorage.setItem('@proffy:user', JSON.stringify(user));

            console.log("sessionStoragetoken" + token)
            console.log("sessionStorageuser" + JSON.stringify(user))
        }
    
        setData({ token, user });

    }

    function signOut() {
        localStorage.clear();
        sessionStorage.clear();
        setData({} as AuthState);
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