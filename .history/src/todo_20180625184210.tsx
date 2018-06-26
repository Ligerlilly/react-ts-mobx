import * as React from
import { observable } from "mobx"

class Todo {
    public id = Math.random();
    public @observable title = "";
    public @observable finished = false;
}
