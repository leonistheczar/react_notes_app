const TextAreaInput = ({label,name,value,onChange,required=false}) => {
    return ( 
        <div className="flex flex-col overflow-hidden">
        <label className="text-left text-lg" htmlFor={name}>
          {label}
        </label>
        <textarea
          className="w-full resize border-2 px-2 py-1 rounded-md"
          name={name}
          value={value}
          onChange={onChange}
          required={required}        />
      </div>
     );
}
 
export default TextAreaInput;