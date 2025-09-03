export default function OperatorButton({ value, id, onClick }) {
    return (
        <button
            id={id}
            onClick={() => onClick(value)}
            className="bg-slate-500 hover:bg-slate-400 text-white text-xl font-bold p-4 rounded-lg shadow-md transition"
        >
            {value}
        </button>
    );
}
