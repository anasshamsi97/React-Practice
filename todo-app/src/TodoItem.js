import React,{Component} from "react"
import "./TodoItem.css";

class TodoItem extends Component{
    render(){
        return (
            <div className="todo-item">
                <input type="checkbox" checked = {this.props.data.completed} onChange = {()=>{this.props.onChange(this.props.data.id)}}/>
                <p>{this.props.data.text}</p>
            </div>
        )
    }
}
export default TodoItem