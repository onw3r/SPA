import {useSelector} from "react-redux";


export function useAuth(){

    const{email} = useSelector(state => state.store.auth);


    return{
        isAuth: email,
        email,
    };
}