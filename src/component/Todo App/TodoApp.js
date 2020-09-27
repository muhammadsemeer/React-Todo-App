import React, { Component } from "react";
import "./todoapp.css";

export default class TodoApp extends Component {
    state = {
        input: "",
        items: [],
        message: "",
        temp: "",
        keyref: "",
        addDisp: "block",
        editDisp: "none",
        textDec: "none",
    };

    componentDidMount() {
        this.getTodo();
    }
    componentDidUpdate() {
        this.saveTodo();
    }

    preventRefresh = (event) => {
        event.preventDefault();
    };
    timer = () => {
        setTimeout(() => {
            this.setState({
                message: "",
            });
        }, 2000);
    };
    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };
    storeItems = () => {
        const { input } = this.state;
        if (input === "") {
            this.setState({
                message: "Enter Something to Add",
            });
            this.timer();
        } else {
            var messageTemp = input + " Added to list";
            this.setState({
                message: messageTemp,
                items: [
                    ...this.state.items,
                    { val: input, status: "notcompleted" },
                ],
                input: "",
            });
            this.timer();
        }
    };

    deleteItem = (key) => {
        const { items } = this.state;
        var messageTemp = items[key].val + " deleted from list";
        this.setState({
            message: messageTemp,
            items: this.state.items.filter((data, index) => index !== key),
        });
        this.timer();
    };

    editItem = (key) => {
        const { items } = this.state;
        this.setState({
            input: items[key].val,
            keyref: key,
            addDisp: "none",
            editDisp: "block",
        });
    };

    updateItem = () => {
        var { items, input, keyref } = this.state;
        var temp = items;
        if (input !== "") {
            var messageTemp = items[keyref].val + " is edited to " + input;
            temp[keyref].val = input;
            this.setState({
                message: messageTemp,
                items: temp,
                input: "",
                keyref: "",
                editDisp: "none",
                addDisp: "block",
            });
            this.timer();
        } else {
            this.setState({
                message: "Items Can't Empty",
            });
            this.timer();
        }
    };
    complete = (key) => {
        const { items } = this.state;
        let tempAarray = items;
        tempAarray.map((data, index) => {
            if (key === index) {
                if (tempAarray[key].status === "notcompleted") {
                    tempAarray[key].status = "completed";
                    var messageTemp = tempAarray[key].val + " Completed";
                    this.setState({
                        items: tempAarray,
                        message: messageTemp,
                    });
                    this.timer();
                } else {
                    tempAarray[key].status = "notcompleted";
                    messageTemp = tempAarray[key].val + "  uncompleted";
                    this.setState({
                        items: tempAarray,
                        message: messageTemp,
                    });
                    this.timer();
                }
            }

            return items;
        });
    };
    saveTodo = () => {
        const { items } = this.state;
        localStorage.setItem("todo", JSON.stringify(items));
    };
    getTodo = () => {
        if (localStorage.getItem("todo") === null) {
            localStorage.setItem("todo", JSON.stringify([]));
        } else {
            const todos = JSON.parse(localStorage.getItem("todo"));
            this.setState({ items: todos });
        }
    };
    render() {
        const { input, items, message, addDisp, editDisp } = this.state;
        return (
            <div className="todo-container">
                <form className="input-form" onSubmit={this.preventRefresh}>
                    <h1>Todo App</h1>
                    <p>{message}</p>
                    <div className="input-section">
                        <input
                            type="text"
                            value={input}
                            onChange={this.handleChange}
                            placeholder="Enter Items"
                        />
                        <button
                            type="button"
                            onClick={this.storeItems}
                            style={{ display: addDisp }}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                        <button
                            type="button"
                            onClick={this.updateItem}
                            style={{ display: editDisp }}
                        >
                            <i className="fas fa-check"></i>
                        </button>
                    </div>
                </form>
                <div className="todo-items">
                    <ul>
                        {items.map((data, index) => (
                            <li key={index}>
                                <i
                                    className="fas fa-check-square"
                                    onClick={() => this.complete(index)}
                                ></i>
                                <span className={data.status}>{data.val}</span>
                                <i
                                    className="fas fa-pencil-alt"
                                    onClick={() => this.editItem(index)}
                                ></i>
                                <i
                                    className="fas fa-trash-alt"
                                    onClick={() => this.deleteItem(index)}
                                ></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
