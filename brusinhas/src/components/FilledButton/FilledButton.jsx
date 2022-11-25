import "./style.css";

export default function FilledButton({ label, onClick, rounded = true }) {
  return (
    <button className={`filled-button ${rounded ? 'rounded-button' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}
