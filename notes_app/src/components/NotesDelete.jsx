const NotesDelete = ({clearNotes}) => {
    return ( 
        <button
         className="w-full mt-4 text-center bg-white border-gray-300 text-purple-800 py-2 rounded-lg shadow-md cursor-pointer transition-all hover:bg-purple-200 hover:border-purple-300"
         onClick={clearNotes}>Delete All Notes 🗑️</button>
     );
}
 
export default NotesDelete;