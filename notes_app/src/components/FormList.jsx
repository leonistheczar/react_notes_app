import NoteForm from './NoteForm';
const NotesList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center">No Notes Yet</p>;
  }
  return (
    <div className="spacing-y-4 flex flex-col gap-y-4">
      {notes.map((note) => {
        console.log(note);
        return (
          <NoteForm 
            key={note.id}
            note={note}
            deleteNote={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
