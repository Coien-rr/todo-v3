import myAxios from "./https";

export function getTaskList(paramsList) {
  return myAxios({
    url: '/getTaskList',
    method: 'post'
  })
}