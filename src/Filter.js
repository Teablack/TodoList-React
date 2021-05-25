import React from "react"

function Filter(props) {
    return (
        <div className="todo-item" >
            <input
                type="checkbox"
                checked={props.hide}
                onChange={() => props.handleChange()}
            />
            <p>hide completed</p>
        </div>
    )
}

export default Filter