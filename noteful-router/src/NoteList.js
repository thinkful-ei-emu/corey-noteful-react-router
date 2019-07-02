import React from 'react'
import Note from './Note'

function NoteList (props) {
    const notes = props.store.map(item => {
        return <Note key={item.id} id={item.id} name={item.name} modified={item.modified} content={item.content}/>
    })
    return(
        <div>
            <ul className="ListItems">
            {notes}
            </ul>
            <button>Add Note</button>
        </div>
    )
}

export default NoteList