import {URL_TODOS} from "../todos/todos-actions";

export const ADD_USERS='ADD_USERS';

//action creator
export const addUser=(users)=>({
    type:ADD_USERS,
    payload:users,
})

export const loadUsers=()=>(dispatch,_,client)=>{
    client.get(URL_TODOS)
        .then(res=>res.json())
        .then(data=>dispatch(addUser(data)))
}