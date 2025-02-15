import {createContext, useState} from "react";
import {useAuth} from "@clerk/clerk-react";
import axios from "axios";
import {toast} from "react-toastify";
export const AppContext = createContext()

const AppContextProvider = ({children}) => {

    const [credits, setCredits] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const { getToken } = useAuth() // using this method we`ll generate
    // clerk registration token

    const loadCreditData = async () => {
        try {
            const token = await getToken()
            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers:{token}})
            if (data.success) {
                setCredits(data.credits)
                console.log(data.credits)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }

    }

    const value = {
        credits,
        setCredits,
        loadCreditData,
        backendUrl
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider