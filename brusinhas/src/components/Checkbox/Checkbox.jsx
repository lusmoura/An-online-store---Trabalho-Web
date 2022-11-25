export default function Checkbox() {
  return (
    <div className="checkbox-container flex justify-start items-center my-[10px]">
      <input type="checkbox" className="w-5 h-5 bg-white rounded mr-2" />
      <label
        htmlFor="checkbox"
        className="not-italic font-light text-lg leading-6 flex items-center text-center font-raleway"
      >
        Lembrar de mim
      </label>
    </div>
  );
}
