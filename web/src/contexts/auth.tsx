import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface User {
    success: boolean;
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
            const storagedUser = await localStorage.getItem('@proffy:user');
            const storagedToken = await localStorage.getItem('@proffy:token');

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

        await api.post<User>('login', { email, password })
                 .then(response => {
                    const { data } = response;
                    console.log("AuthProvider: " + data);
                    setUser(data);
                    setLoading(true);
                    api.defaults.headers.Authorization = `Baerer ${token}`;
 
                    if (remember){
                        localStorage.setItem('@proffy:user', JSON.stringify(user));
                        localStorage.setItem('@proffy:token', token);
                    }
                })
    }

    function signOut() {
        localStorage.clear();
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