import FilledButton from "../FilledButton/FilledButton";
// import './style.css'

export default function ItemCounter() {
  return (
    <div className="item-counter-outer flex flex-row items-center h-10">
        <FilledButton rounded={false} label="-"/>
        <div className="item-count w-24 h-full bg-gray-300 text-center flex items-center justify-center">
            <p>1</p>
        </div>
        <FilledButton rounded={false} label="+"/>
    </div>
  )
}
