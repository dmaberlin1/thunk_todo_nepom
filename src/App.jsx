import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "./store/users/user-actions";
import NewTodo from "./components/NewTodo";

function App() {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  return (
    <div className="App">
    <h1>redux thunk</h1>
      <NewTodo/>
      <UserList/>
      <TodoList/>
    </div>
  );
}

export default App;
