import React, { Component } from "react";
import Footer from "./component/footer/footer";
import TodoApp from "./component/Todo App/TodoApp";
class App extends Component {
    render() {
        return (
            <>
                <TodoApp />
                <Footer />
            </>
        );
    }
}
export default App;
