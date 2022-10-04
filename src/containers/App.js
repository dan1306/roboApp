import React, { Component, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'

// import robots from "./robots"
import Scroll from "../components/Scroll"

 

class App extends Component{

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(
            response => {
                return response.json()
            }
        ).then(users => {
           this.setState({robots: users})
       })
    }

    onSearchChange= (e)=> {
        
        const { name, value } = e.target
        this.setState({searchfield: value})
        console.log(value, name)

     
     }

    render() {

        const filteredRebots = this.state.robots.filter((value, index) => {
            return value.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange}
                    
                />
                <Scroll>
                    <CardList robots={filteredRebots}/>
                </Scroll>

            </div>
    
        )
    }
}

export default App



