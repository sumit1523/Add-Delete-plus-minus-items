import React, { Component } from 'react';
import './App.css';
import PostList from './PostList';

class App extends Component {
    state = {
        value: " ",
        items: []
    }
    

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    addItem = () => {
        const { items, value } = this.state;
        let itemsCopy = items.slice()
        let truncatedString = value.substring(0, 20);
        itemsCopy.push({ "title": truncatedString, "score": 0 })
        itemsCopy.sort((a, b) => {
            return b.score - a.score;
        })
        this.setState({
            items: itemsCopy,
            value: ""
        })
    }
    removeItem = (index) => {
        const { items } = this.state;
        let itemsCopy = items.slice()
        itemsCopy.splice(index, 1);
        itemsCopy.sort((a, b) => {
            return b.score - a.score
        })

        this.setState({
            items: itemsCopy
        })
    }
    updateScore = (index, val) => {
        const { items } = this.state;
        let itemsCopy = items.slice()
        itemsCopy[index].score += val
        itemsCopy.sort((a, b) => {
            return b.score - a.score
        })
        this.setState({
            items: itemsCopy
        })
    }
    render() {
        const { value, items } = this.state;
        return (
            <div className="postList">
                <input value={value} onChange={this.handleChange} />
                <button onClick={() => this.addItem()}>Submit</button>
                <PostList postList={items} updateScore={this.updateScore} removeItem={this.removeItem} />
            </div>
        )
    }
}

export default App;
