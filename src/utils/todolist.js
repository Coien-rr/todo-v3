import myAxios from './https';

export function getTaskList(paramsList) {
	return myAxios({
		url: '/getTaskList',
		method: 'post',
		data: paramsList,
	});
}

export function addTodoTask(params) {
	return myAxios({
		url: '/addTodoTask',
		method: 'post',
		data: params
	})
}

export function updateTodoTask(id){
	return myAxios({
		url:'/changeTodoTask',
		method: 'post',
		data: id
	})
}