export default function Display({ expression, result }) {
    return (
        <div className="bg-zinc-300 text-black-400 font-mono p-4 rounded-lg mb-2 shadow-inner">
            <div className="text-right text-lg">{expression}</div>
            <div id="display" className="text-right text-2xl font-bold">{result}</div>
        </div>
    );
}
