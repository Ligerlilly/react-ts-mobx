import * as React from
import { observable } from "mobx"

class Todo {
    const id = Math.random();
    public @observable title = "";
    public @observable finished = false;
}
