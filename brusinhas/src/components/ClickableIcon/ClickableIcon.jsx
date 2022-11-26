export default function ClickableIcon({ src, alt, onClick }) {
  return (
    <button className="hover:scale-105 hover:rotate-1" onClick={onClick}>
      <img src={src} alt={alt} className="cursor-pointer" />
    </button>
  );
}
