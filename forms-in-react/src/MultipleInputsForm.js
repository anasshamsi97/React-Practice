import React, { Component } from 'react'
class MultipleInputsForm extends Component {
    constructor() {
        super()
        this.state = {
            isChecked: false,
            noOfPeople: 2
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let value = event.type === 'checkbox' ? event.target.checked : event.target.value
        console.log(value)
        let name = event.target.name
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        name="isChecked"
                        type='checkbox'
                        value={this.state.isChecked}
                        onChange={this.handleChange}>
                    </input>

                    <input
                        name="noOfPeople"
                        type='text'
                        value={this.state.noOfPeople}
                        onChange={this.handleChange}>
                    </input>
                </form>
            </div>
        )
    }
}
export default MultipleInputsForm