export default function Shoe({ name, category, image, onShoeSelect }) {
    return (
        <div
            onClick={() => onShoeSelect(category)}
            className="bg-slate-200 p-4 rounded-lg shadow-md cursor-pointer hover:bg-slate-300 flex-shrink-0 w-80"
        >
            <img src={image} alt={name} className="w-full h-60 object-cover rounded-t-lg " />
            <div className="p-4">
                <p className="font-bold text-xl mb-2 text-black">{name}</p>
                <p className="text-lg text-gray-700">{category}</p>
            </div>
        </div>
    );
}