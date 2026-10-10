counterSlice
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
name: "counter",
initialState: {
value: 0,
},
reducers: {
increment: (state) => {
state.value += 1;
},
decrement: (state) => {
state.value -= 1;
},
},
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
const store = configureStore({
reducer: {
counter: counterReducer,
},
});
export default store;
2. Dispatch `increment`/`decrement` actions from a component.
3.Use `useSelector` to read count and render it in the UI
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
const Counter = () => {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
return (
<div>
<h1>Redux Counter</h1>
<h2>{count}</h2>
<button onClick={() => dispatch(increment())}>
Increment
</button>
<button onClick={() => dispatch(decrement())}>
Decrement
</button>
</div>
);
};
export default Counter;
4. Create another slice `todosSlice` with `addTodo` and `toggleTodo`
Todo.js
import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
name: "todos",
initialState: {
todos: [],
},
reducers: {
addTodo: (state, action) => {
state.todos.push({
id: Date.now(),
text: action.payload,
completed: false,
});
},
toggleTodo: (state, action) => {
const todo = state.todos.find(
(todo) => todo.id === action.payload
);
if (todo) {
todo.completed = !todo.completed;
}
},
},
});
export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
const store = configureStore({
reducer: {
counter: counterReducer,
todos: todosReducer,
},
});
export default store;
todo.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/todosSlice";
const Todo = () => {
const [text, setText] = useState("");
const todos = useSelector((state) => state.todos.todos);
const dispatch = useDispatch();
const handleAddTodo = () => {
if (text.trim() ===
"") return;
dispatch(addTodo(text));
setText("");
};
return (
<div>
<h1>Todo List</h1>
<input
type="text"
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Enter todo"
/>
<button onClick={handleAddTodo}>
Add Todo
</button>
<ul>
{todos.map((todo) => (
<li key={todo.id}>
<span
onClick={() => dispatch(toggleTodo(todo.id))}
style={{
textDecoration: todo.completed
? "line-through"
: "none",
cursor: "pointer",
}}
>
{todo.text}
</span>
</li>
))}
</ul>
</div>
);
};
export default Todo;
5. Combine slices and verify both pieces of state update correctly.
store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
const store = configureStore({
reducer: {
counter: counterReducer,
todos: todosReducer,
},
});
export default store;
