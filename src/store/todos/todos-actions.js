import {client} from "../../api";

export const ADD_TODOS='todos/ADD_TODOS';
export const SET_LOADING='todos/SET_LOADING'
export const SET_ERROR='todos/SET_ERROR'

export const ADD_TODO='todos/ADD_TODO'
export const URL_TODOS='https://jsonplaceholder.typicode.com/todos'
let USER_ID=1000;
export const addTodo=(todo)=>({
    type:ADD_TODO,
    payload:todo
})
export const addTodos=(todos)=>({
    type:ADD_TODOS,
    payload:todos,
})

export const setLoading=()=>{
    return {
        type:SET_LOADING
    }
}
export const setError=(err)=>({
    type:SET_ERROR,
    payload:err
})
export const loadTodos=() => (dispatch,_,client) => {
    dispatch(setLoading())

    client.get(URL_TODOS,{})
      .then(data=>dispatch(addTodos(data)))
        .catch(err =>dispatch(setError(err)))
}

export const createTodo=(title)=>(dispatch,_,client)=>{
    client.post(URL_TODOS,{
        title,
        completed:false,
        userId:USER_ID+(Math.random()*10)
    }).then(newTodo=>dispatch(addTodo(newTodo)))
        .catch(err=>dispatch(setError(err)))
}