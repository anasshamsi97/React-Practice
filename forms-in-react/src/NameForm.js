import React, { Component } from 'react';

class NameForm extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            name: event.target.value 
        })
    }
    handleSubmit(event) {
        alert("name has been changed" + this.state.name)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type='text' value={this.state.name} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}
export default NameForm