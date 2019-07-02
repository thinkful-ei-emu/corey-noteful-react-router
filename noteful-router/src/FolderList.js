import React from 'react'
import Folder from './Folder'

function FolderList (props) {
    const folder = props.store.map(item => {
        return <Folder key={item.id} id={item.id} name={item.name}/>
    })
    return(
        <nav>
            <ul className="nav-bar">
            {folder}
            </ul>
            <button>Add Folder</button>
        </nav>
    )
}

export default FolderList