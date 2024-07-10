import React from 'react';
import { createContext,useContext,useReducer } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const initialState = {logged: false};

    const authReducer = (state,action) => {
        switch(action.type) {
            case 'LOGIN':
                return {...state, logged:true};
            case 'LOGOUT':
                return {...state, logged:false};
            
        }
    };

    const [state,dispatch] = useReducer(authReducer,initialState);

    const login = () => dispatch({type:'LOGIN'});
    const logout = () => dispatch({type:'LOGOUT'});

    return <AuthContext.Provider value={{logged: state.logged,login,logout}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext);
};