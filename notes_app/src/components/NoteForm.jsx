const FormNote = ({note, deleteNote}) => {
    return ( 
        <div
            className={`group relative  p-5 flex flex-col items-start gap-2 border-l-4
                        ${
                          note.priority === "High"
                            ? "border-red-600"
                            : note.priority === "Low"
                            ? "border-green-600"
                            : "border-yellow-500"
                        } 
                    bg-white/80 backdrop-blur-sm
                    shadow-sm hover:shadow-lg transition-all duration-300
                    rounded-xl`}
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-slate-800 group-hover:text-purple-600 transition">
                {note.title}
              </h2>
              <span
                className={`
        text-xs font-medium px-3 py-1 rounded-full
        ${
          note.priority === "High"
            ? "bg-red-100 text-red-600"
            : note.priority === "Low"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
        }
      `}
              >
                {note.priority}
              </span>
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Category:</span>{" "}
              {note.category || "Uncategorized"}
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              {note.description}
            </p>
            <button
              className="text-purple-900 cursor-pointer transition-all hover:underline hover:underline-offset-[6px]"
              onClick={() => deleteNote(note.id)}
            >
              🗑️ Delete
            </button>
          </div>
     );
}
 
export default FormNote;