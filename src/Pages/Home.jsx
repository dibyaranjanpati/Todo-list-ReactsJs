import React, { useEffect, useState } from "react";
import Todos from "../Components/Todos";
import AddTodo from "../Components/AddTodo";
const Home = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const onEdit = (index) => {
    // console.log(todos[index]);
    setAction("edit");
    setTempIndex(index);
    let data = todos[index];
    setTitle(data.title);
    setDesc(data.desc);
  };
  const updateTodo = (title, desc) => {
    // catch the edit item by the help of index;
    let data = todos;
    data[tempIndex].title = title;
    data[tempIndex].desc = desc;
    // console.log(data)
    setTodos(data);
    setAction("add");
    localStorage.setItem("todos",JSON.stringify(data))
  };
  const addTodo = (title, desc) => {
    // console.log("add todo" ,title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tempIndex, setTempIndex] = useState(0);
  const [action, setAction] = useState("add");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <AddTodo
        addTodo={addTodo}
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        action={action}
        setAction={setAction}
        updateTodo={updateTodo}
      />
      <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default Home;
