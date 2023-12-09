import { todoList, add, clearTodoList, ChangeStatus } from "../TodoList";

describe("Todo list operations", () => {
    it("Add function", () => {
        add("Do homework")
        add("Walk the dog")
        expect(todoList.length).toBe(2);
    });
    it("Delete all task", () => {
        add("Do homework")
        add("Walk the dog")
        clearTodoList();
        expect(todoList.length).toBe(0);
    });
    it("Change Status ", () => {
        add("Do homework")
        ChangeStatus(0);
        expect(todoList[0].isCompleted).toBe(true);
    });
})