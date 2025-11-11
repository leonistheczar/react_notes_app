const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="flex flex-col">
      <label className="text-left text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full border-2 px-2 py-1 rounded-md"
        value={value}
        name={name}
        //   id="title"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
