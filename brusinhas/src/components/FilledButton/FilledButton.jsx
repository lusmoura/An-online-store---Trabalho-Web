import "./style.css";

export default function FilledButton({ label, onClick }) {
  return (
    <button className="filled-button" onClick={onClick}>
      {label}
    </button>
  );
}
