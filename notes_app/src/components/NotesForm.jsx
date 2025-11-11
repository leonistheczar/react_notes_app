import { useState } from "react";
import TextInput from './inputs/TextInput';
import SelectFormInput from "./inputs/SelectFormInput";
import TextAreaInput from "./inputs/TextAreaInput";
const NotesForm = ({notes, setNotes}) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "",
    description: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [id, setID] = useState(1);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const getNextId = () => {
    const nextID = id + 1
    setID(nextID);
    return id;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!formData.title || !formData.description){
        alert("Empty Note set fields...");
        return;
    }
    
    // Create new object
    let noteID = getNextId();
    const newNote = { id: noteID, ...formData };
    setNotes([...notes, newNote]);
    console.log(newNote);

    // Reset form fields
    setFormData({
      title: "",
      priority: "Medium",
      category: "",
      description: "",
    });
  };
  return (
    <>
    {/* Toggle button */}
    <button onClick={() => setIsFormVisible(!isFormVisible)} type="submit" className="w-full my-3 text-center bg-gray-200 border-gray-300 text-purple-800 py-2 rounded-lg shadow-md cursor-pointer transition-all hover:bg-purple-200 hover:border-purple-300">
    {isFormVisible ? 'Hide Notes form ❌' : "Add a new Note ➕"}
    </button>
    {/* Form Submission */}
    {isFormVisible && <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-y-2">
      <TextInput 
        label="Title"
        name="title"
        value = {formData.title}
        onChange={handleChange}
        required  
      />
      <SelectFormInput 
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={[
            {value: "Low", label: "🟢 Low"},
            {value: "Medium", label: "🟡 Medium"},
            {value: "High", label: "🔴 High"},
        ]}
      />
      <SelectFormInput 
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={[
            {value: "Work", label: "🗃️ Work"},
            {value: "Personal", label: "🏡 Personal"},
            {value: "Ideas", label: "💡Ideas"},
        ]}
      />
      <TextAreaInput
        label="Descrption"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required/>
      <button
        type="submit"
        className="cursor-pointer mt-6 bg-purple-500 px-4 py-2 rounded-lg text-white transition-all duration-100 hover:bg-purple-800"
      >
        ✏️ Add Note
      </button>
    </form> }
    </>
  );
};

export default NotesForm;
