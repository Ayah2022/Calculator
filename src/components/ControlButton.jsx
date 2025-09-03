export default function ControlButton({ label, id, onClick, color = "bg-red-500" }) {
    return (
        <button
            id={id}
            onClick={onClick}
            className={`${color} hover:opacity-90 text-white text-xl font-bold p-4 rounded-lg shadow-md transition`}
        >
            {label}
        </button>
    );
}
