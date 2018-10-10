import React, {Component} from 'react';
import './App.css';

class Input extends Component{
    constructor() {
        super();

        this.state = {
            data: [],
            value: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value : event.target.value
        });
    }

    add = (e) => {
        const data = this.state.data;
        const value = this.state.value;
        data.push(value);
        console.log(data)
        this.setState({
            data,
            value: ''
        });
		}
			
    remove = (e,index) => {
		const data = this.state.data;
		data.splice(index, 1);
		this.setState({
			data,
		})	
	}

    render() {
        return (
        <div>
            <input type="text" className="input-field" value={this.state.value}
            onChange={this.handleChange}/>
            <button className="add-todo" onClick={this.add}> Add todo </button>
            
            <ul>
			{this.state.data === [] ? null : this.state.data.map((todo, index) => {
			return <div key={index}>
				<li>{todo}</li> 
				<button onClick={this.remove}>delete</button>
				</div>
			})}
			</ul>
        </div>
        )
        
    }
}

export default Input

