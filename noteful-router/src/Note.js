import React from 'react'

class Note extends React.Component {

    
    render() {
    return (
            <li key={this.props.id}>
                <h2>{this.props.name}</h2>
                <p>{this.props.modified}</p>
                <p>{this.props.content}</p>
                <button>Delete Note</button>
            </li>
    )
}
}

export default Note