import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={() => {
                    this.setState((previousState) => {
                        return {
                            counter: previousState.counter+1
                        }

                    })
                }}>+</button>
            </div>
        )
    }
}
export default Counter