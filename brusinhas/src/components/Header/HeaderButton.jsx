export default function HeaderButton({ label, onClick = () => {} }) {
  return (
    <button
      className="header-button rounded bg-white text-pink-900 mr-8 px-[20px] py-[10px]"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
