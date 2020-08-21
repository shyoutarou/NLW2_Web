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
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(email: string, password :string): Promise<void>;
    signOut(): void;
    handleToggleRemember(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FunctionComponent = ({ children }) => {
 
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function  loadStoragedData (){
            let storagedUser = await localStorage.getItem('@proffy:user');

            if (!storagedUser) {
                storagedUser = await sessionStorage.getItem('@proffy:user');
            }
            
            let storagedToken = await localStorage.getItem('@proffy:token');

            if (!storagedToken) {
                storagedToken = sessionStorage.getItem('@proffy:token');
            }

            // simular uma lentidão para mostar o loading.
            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
                api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
            }

            setLoading(false);
        }

        loadStoragedData();
    }, []);

    function handleToggleRemember(){
        setRemember(!remember);
    }

    async function signIn(email: string, password: string) {

        await api.post('auth', { email, password })
                 .then(response => {
                    const { data } = response;

  
                    console.log("AuthProvider: " + data.user);
                    setUser(data.user);
                    setLoading(true);
                    api.defaults.headers.Authorization = `Baerer ${data.token}`;
 
                    if (remember) {
                        localStorage.setItem('@proffy:token', data.token);
                        localStorage.setItem('@proffy:user', JSON.stringify(data.user));
                    } else {
                        sessionStorage.setItem('@proffy:token', data.token);
                        sessionStorage.setItem('@proffy:user', JSON.stringify(data.user));
                    }
                })
    }

    function signOut() {

        localStorage.clear();
        sessionStorage.clear();
        setUser(null);
        setLoading(true);
    }

    return(

        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut, handleToggleRemember}}>
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