// import * as React from
import { observable } from "mobx"

export interface ITodo {
    readonly id: number
    readonly finished: boolean
    readonly title: string
}
class Todo {
    constructor(title: string) {
        this.title = title
    }
    public id = Math.random();
    @observable public title: string = "";
    @observable public finished = false;
}

export default Todo