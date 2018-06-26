// import * as React from
import { observable } from "mobx"

export interface ITodo {
    id: number
    finished: boolean
    title: string
}
class Todo {
    public id = Math.random();
    @observable public title: string = "";
    @observable public finished = false;

    constructor(title: string) {
        this.title = title
    }
}

export default Todo