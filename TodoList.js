// NOTE: This is an example! Refer to the project description for
// how this should be implemented!
var todoList = [];

const clearTodoList = () => {
    todoList = [];
}
const add = (name) => {
    let id = todoList.length;
    todoList.push({
        id: id,
        name: name,
        isCompleted: false,
    });
    return id;
};
const ChangeStatus = (id) => {
    todoList[id].isCompleted = !todoList[id].isCompleted;
}

export { todoList, add, clearTodoList, ChangeStatus };
