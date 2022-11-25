import FilledButton from "../FilledButton/FilledButton";
import './style.css'

export default function ItemCounter() {
  return (
    <div className="item-counter-outer">
        <FilledButton rounded={false} label="-"/>
        <div className="item-count">
            <p>1</p>
        </div>
        <FilledButton rounded={false} label="+"/>
    </div>
  )
}
