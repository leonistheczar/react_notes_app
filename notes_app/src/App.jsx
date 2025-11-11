import { useEffect, useState } from 'react';
import NotesForm from './components/NotesForm'
import NotesList from './components/FormList'
import NotesDelete from './components/NotesDelete';
import './index.css'
const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    return savedNotes || [];
  });
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  })
  const deleteNote = (id) => {
    if(confirm("Are you sure you want to delete this note?")){
      setNotes(notes.filter((note) => note.id !== id));
  }
}
  const deleteNotes = () => {
    if(confirm("Are you sure you want to delete all notes?")){
      setNotes([]);
      window.localStorage.clear();
      window.location.reload();
    }
  }
  return ( 
  <div className='p-4 bg-slate-200 my-6 max-w-xl mx-auto rounded-lg text-center shadow-lg'>
      <h2 className='text-3xl'>📝 Notes App</h2>
      <NotesForm notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} deleteNote={deleteNote}/>
      {notes.length > 0 && <NotesDelete clearNotes={deleteNotes} />}
  </div> 
  )
}  
export default App;