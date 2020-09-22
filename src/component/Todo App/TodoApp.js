import React, { Component } from "react";
import "./todoapp.css";

export default class TodoApp extends Component {
    state = {
        input: "",
        items: [],
    };

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };

    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;

        this.setState({
            items: [...this.state.items, input],
            input: "",
        });
    };

    deleteItem = (key) => {
        this.setState({
            items: this.state.items.filter((data, index) => index !== key),
        });
    };
    render() {
        const { input, items } = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input
                        type="text"
                        value={input}
                        onChange={this.handleChange}
                        placeholder="Enter Items"
                    />
                </form>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>
                            {data}
                            <i
                                className="fas fa-trash-alt"
                                onClick={() => this.deleteItem(index)}
                            ></i>
                            <i className="fas fa-edit"></i>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}