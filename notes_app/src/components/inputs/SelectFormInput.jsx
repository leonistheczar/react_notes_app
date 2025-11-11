const SelectFormInput = ({label,value, name,options, onChange}) => {
    return (  
        <div className="flex flex-col">
        <label className="text-left text-lg" htmlFor={name}>
          {label}
        </label>
        <select
          className="w-full border-2 px-2 py-1 rounded-md"
          type="text"
          value={value}
          name={name}
          onChange={onChange}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
      </div>
    );
}
 
export default SelectFormInput;