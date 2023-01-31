import axios from "axios";


const path = 'http://localhost:8080/api/todos/'

export const getTodoList = async (page) => {

  const {data} = await axios.get(path +`list?page=${page || 1}`)

  return data
}


export  const getTodo  = async (id) => {

  const {data} = await axios.get(`http://localhost/todos/${id}`)

  return data
}


export  const putTodo  = async (todo) => {

  const {data} = await axios.put(`http://localhost/todos/${todo.id}`, todo)

  return data
}

export  const deleteTodo  = async (todo) => {

  const {data} = await axios.delete(`http://localhost/todos/${todo.id}`)

  return data
}
