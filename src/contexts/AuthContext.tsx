import React, { createContext, useEffect, useState } from "react";
import { AuthServices } from "../services/AuthServices";
import { useToast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import api from "../config/Axios";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface SigninData {
  email: string;
  password: string;
}

interface SignupData {
  email: string;
  password: string;
  phone: string;
}


export interface AuthData {
    token: string,
    user: {
      email: string,
      phone: string
    }
}

export interface AuthContextDataProps {
  signin: (data: SigninData) => Promise<AuthData | void>;
  signUp: (data: SignupData) => Promise<void>;
  signOut: () => Promise<void>;
  authData: AuthData | null;
  userLogged: boolean;
  securityMode: boolean;
  setSecurityMode: (value: boolean) => void;
  passwords: string[];
  handleChangePassword: (array:any) => Promise<void>;
  loaded: boolean,
  setAuthData: any
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

function AuthProvider({ children }: AuthProviderProps) {
  const [authData, setAuthData] = useState<AuthData >();
  const [passwords, setPassword] = useState([
    '',
    '',
    ''
  ])

  const [appState, setAppState] = useState(AppState.currentState);
  const [userLogged, setUserLogged] = useState(false);
  const [securityMode, setSecurityMode] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toast = useToast();

  useEffect(() => {
    const state = AppState.addEventListener("change", handleAppStateChange);
    return(() => {
      state.remove()
    })
  }, [userLogged, authData]);

  useEffect(() => {
    isLoggedAsync();
  }, [])
  

  const handleAppStateChange = (nextAppState: any) => {
    // Verificar se esta em background
    if (nextAppState === "background") {
      if (!userLogged) {
        setSecurityMode(false);
      } else if (userLogged) {
        // console.log(authData?.user)
        if (authData?.user != undefined && authData?.user?.passwordApp != '' && authData?.user?.passwordEmergecy != ''  && authData?.user?.passwordBank != '' ) {
          setSecurityMode(true);
        }
        
      }
    }

    if (appState.match(/inactive|background/) && nextAppState === "active") {
      // console.log("App has come to the foreground!");
    }

    setAppState(nextAppState);
  };

  const handleChangePassword = async (array:any) => {
    setPassword(array)
  }


  async function signin({
    email,
    password,
  }: SigninData): Promise<AuthData | void> {
    AuthServices.signIn(email, password)
    .then(async (response) => {
      const auth = { token: response.data.token, ...response.data.user }
      setAuthData(auth);
      await AsyncStorage.setItem("authData", JSON.stringify(auth));
      isLoggedAsync();

      setUserLogged(true);

      // console.log("storaged data: ", auth);

      toast.show({
        title: "Login realizado com sucesso!",
        placement: "top",
        duration: 3000,
        bgColor: "green.500",
      });
    })
    .catch(() => {
      toast.show({
        title: "Verifique suas credenciais",
        placement: "top",
        bgColor: "red.500",
        duration: 5000,
      });
    })
  }

  async function signUp({ email, password, phone }: SignupData) {
    return new Promise<void>((resolve, reject) => {
      AuthServices.signUp(email, password, phone)
      .then(() => {
        resolve()
        toast.show({
          title: "Cadastro realizado com sucesso!",
          placement: "top",
          duration: 3000,
          bgColor: "green.500",
        });
      })
      .catch((error:AxiosError) => {
        reject()
        toast.show({
          title: error.response?.data?.errors,
          placement: "top",
          duration: 3000,
          bgColor: "red.500",
        });
      })
    })
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem("authData");
      setUserLogged(false);
      setAuthData(null);
    } catch (error) {
      // console.log("Error signOut: ", error);
    }
  }

  function isLoggedAsync() {
    try {
      AsyncStorage.getItem("authData")
      .then((authData) => {
        if (authData) {
          const data = JSON.parse(authData)
          // console.log("Logado com sucesso (AsyncStorage)", data);
          api.get('auth/check', {
            headers: {
              'Authorization': `Bearer ${data.token}`
            }
          })
          .then((response) => {
            setUserLogged(true);
            setAuthData({...data, user: response.data.user});
            if (response.data.user.passwordApp != '' && response.data.user.passwordEmergecy != ''  && response.data.user.passwordBank != '' ) {
              setSecurityMode(true);
            }
            setLoaded(true)
          })
          .catch(() => {
            setLoaded(true)
          })
          
        } else {
          setUserLogged(false);
          setSecurityMode(false);
          setLoaded(true)
        }
      })
      
    } catch (error) {
      // console.log("Error on isLogged", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        signUp,
        authData,
        signOut,
        userLogged,
        securityMode,
        setSecurityMode,
        passwords,
        handleChangePassword,
        loaded,
        setAuthData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
