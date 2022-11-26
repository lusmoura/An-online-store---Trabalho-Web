export default function TextField({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
  required=false,
}) {
  return (
    <div className="text-field-container flex justify-center items-start flex-col px-[20px] flex-1 my-[10px]">
      <label className="not-italic font-light text-lg leading-7 mb-1 font-raleway">
        {`${label} ${required ? '*' : ''}`}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="bg-white rounded box-border w-full placeholder-gray-500 border p-2"
        required={required}
      />
    </div>
  );
}
