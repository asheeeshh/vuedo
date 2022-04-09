<script>
import { ref } from "vue";
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            todos: [],
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                completed: false,
                id: id++,
                isEditing: false,   
            });
            this.newTodo = '';
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        toggleTodo(todo) {
            todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        editTodo(todo) {
            todo.isEditing = !todo.isEditing;
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
    },
    mounted() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
}
</script>

<template>
    <div class="todo-cont">
        <div class="todo-head">
            <h2>Todo App</h2>
            <v-text-field v-model="newTodo" @keyup.enter="addTodo" variant="underlined" label="Add Todo" class="todo-add"/>
        </div>
        <div class="todo-main">
            <ul>
                <li v-for="todo in todos" :key="todo.id" class="todo">
                    <div class="todo-content">
                        <v-btn type="checkbox" @click="toggleTodo(todo)" class="check">✔️</v-btn>
                        <span :class="{done: todo.completed}" v-if="!todo.isEditing">{{ todo.title }}</span>
                        <v-text-field variant="underlined" v-model="todo.title" v-if="todo.isEditing" @keyup.enter="editTodo(todo)" @keyup.esc="editTodo(todo)" />
                    </div>
                    <div class="todo-btns">
                        <v-btn @click="editTodo(todo)" class="edit-btn">✏️</v-btn>
                        <v-btn @click="removeTodo(todo)">❌</v-btn>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
.todo-cont {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.todo-head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
}
.todo-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 80%;
    width: 100%;
}
.todo-add {
    max-height: 30%;
    width: 100%;
}
.todo {
    display: flex;
    flex-direction: row;
    justify-content: eenter;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
}
.todo-content {
    width: 80%;
}
.todo-btns {
    width: 20%;
}
ul {
    list-style: none;
    padding: 0;
    overflow-y: scroll;
    width: 100%;
}
.check {
    margin-right: 10px;
}
.edit-btn {
    margin: 0 10px;
}
::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 8px;
    height:8px;
}
::-webkit-scrollbar-track {
    background: transparent;
    background-clip: content-box;
}
::-webkit-scrollbar-thumb {
    background: #2d3035;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: #2d3035;
}
</style>