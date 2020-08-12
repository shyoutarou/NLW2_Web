import React, { createContext, useState, useContext, useEffect } from 'react';
import * as auth from '../services/auth';

interface User {
    email: string;
    password: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(email: string, password :string, token:string): Promise<void>;
    signOut(): void;
    handleToggleRemember(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        async function  loadStoragedData (){
            const storagedUser = await localStorage.getItem('@proffy:user');
            const storagedToken = await localStorage.getItem('@proffy:token');

            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
            }
        }

        loadStoragedData();
    }, []);

    function handleToggleRemember(){
        setRemember(!remember);
    }

    async function signIn(email: string, password: string, token: string) {

        // const response = await auth.signInAPI(username, email);

        setUser({ email: email, password: password });

        if (remember){
            localStorage.setItem('@proffy:user', JSON.stringify(user));
            localStorage.setItem('@proffy:token', token);
        }
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    return(

        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, handleToggleRemember}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
