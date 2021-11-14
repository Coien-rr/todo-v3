import { defineStore } from 'pinia';
import {
	getTaskList,
	addTodoTask,
	updateTodoTask,
	callCleanAllTaskAPI,
} from '../utils/todolist';

export const todoStore = defineStore('todos', {
	state: () => ({
		todos: [],
		filter: 'all',
		nextId: 0,
	}),

	getters: {
		finishedTodos(state) {
			return state.todos.filter((todo) => todo.isFinished);
		},
		unfinishedTodos(state) {
			return state.todos.filter((todo) => !todo.isFinished);
		},
		filteredTodos(state) {
			if (this.filter === 'finished') {
				return this.finishedTodos;
			} else if (this.filter === 'unfinished') {
				return this.unfinishedTodos;
			}
			return this.todos;
		},
	},

	actions: {
		initialTodoList() {
			this.todos = [];
			const heoo = 'Hello! Server!';
			getTaskList(heoo).then((res) => {
				console.log(res.data.todolist);
				let tasklist = res.data.todolist;
				for (let i = 0; i < tasklist.length; ++i) {
					this.todos.push(tasklist[i]);
				}
				this.nextId = tasklist.length + 1;
				console.log(this.nextId);
			});
		},

		addTodoTask(text) {
			this.todos.push({ text, id: this.nextId++, isFinished: false });
			addTodoTask(this.todos[this.nextId - 2]);
		},

		changeTodoTask(todoId) {
			console.log('call!');
			updateTodoTask(todoId).then((res) => console.log(res));
		},

		cleanAllTask() {
			console.log('callCleanAllTaskAPI!');
			callCleanAllTaskAPI().then((res) => console.log(res.data.result));
			this.initialTodoList();
		},
	},
});
