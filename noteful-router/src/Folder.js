import React from 'react'

class Folder extends React.Component {

    render() {
    return (
            <li key={this.props.id}>
                <h2>{this.props.name}</h2>
            </li>
    )
}
}

export default Folder