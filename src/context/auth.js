import {useState, useEffect, useContext, createContext} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token:"",
    });
    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
          const parseData = JSON.parse(data);
              if (parseData.user && parseData.userInfo) {
            const chosenData = parseData.user || parseData.userInfo;
            setAuth({
              ...auth,
              user: chosenData,
              token: parseData.token,
            });
          } else {
            setAuth({
              ...auth,
              user: parseData.user || parseData.userInfo,
              token: parseData.token,
            });
          }
        }
      }, []);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export {useAuth, AuthProvider};