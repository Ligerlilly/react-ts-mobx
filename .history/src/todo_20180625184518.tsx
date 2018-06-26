// import * as React from
import { observable } from "mobx"

class Todo {
    public id = Math.random();
    @observable public title: string = "";
    @observable public finished = false;
}
