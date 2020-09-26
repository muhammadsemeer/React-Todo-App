import React, { Component } from "react";
import "./todoapp.css";

export default class TodoApp extends Component {
    state = {
        input: "",
        edit: "", 
        items: [],
        message: "",
        temp: "",
    };

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };
    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;
        if (input === "") {
            this.setState({
                message: "Enter Something to Add",
            });
        } else {
            this.setState({
                items: [...this.state.items, input],
                input: "",
                message: "",
            });
        }
    };

    deleteItem = (key) => {
        this.setState({
            items: this.state.items.filter((data, index) => index !== key),
        });
    };
    

    render() {
        const { input, items, message } = this.state;
        return (
            <div className="todo-container">
                <form className="input-form" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <p>{message}</p>
                    <div className="input-section">
                        <input
                            type="text"
                            value={input}
                            onChange={this.handleChange}
                            placeholder="Enter Items"
                        />
                        <button type="submit">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </form>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>
                            {data}
                            <i
                                className="fas fa-trash-alt"
                                onClick={() => this.deleteItem(index)}
                            ></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
