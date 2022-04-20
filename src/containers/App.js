import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'

// components with own state use class syntax
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    //triggers when component is mounted
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    // everytime you make your evts use arrow fns
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {

        // destructuring
        const { robots, searchfield } = this.state;

        // everytime input changes we get an event

        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ?
            <h3>Loading...</h3> :
            (
                <div className="tc" >
                    <h1 className="f1">Robots yearbook</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobot} />
                    </Scroll>

                </div>
            )





    }
}

export default App