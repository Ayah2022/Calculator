export default function NumberButton({ value, id, onClick }) {
    return (
        <button
            id={id}
            onClick={() => onClick(value)}
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold p-4 rounded-lg shadow-md transition"
        >
            {value}
        </button>
    );
}
