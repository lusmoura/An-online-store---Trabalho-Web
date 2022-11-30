export default function FilledButton({ label, onClick, rounded = true, onBlur= () => {} }) {
  return (
    <button
      className={`bg-primary h-max text-white text-lg font-bold leading-6 tracking-normal text-center py-[10px] px-[20px] font-raleway ${
        rounded ? "rounded-md" : ""
      }`}
      onClick={onClick}
      onBlur={onBlur}
    >
      {label}
    </button>
  );
}
