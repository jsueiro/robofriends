import React, { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // lifecycle method
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry. that's not a good behavior.</h1>
        }
        // use children when as wrapper
        return this.props.children
    }
}

export default ErrorBoundary;