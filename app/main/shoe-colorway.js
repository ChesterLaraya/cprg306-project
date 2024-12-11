import { useEffect, useState } from "react";

export default function ShoesColorway({ shoe }) {
    const [colorways, setColorways] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!shoe) return;

        const fetchColorways = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://sneakers-api.vercel.app/sneakers?name=${encodeURIComponent(shoe.name)}`);
                if (!response.ok) throw new Error("Failed to fetch colorways");
                const data = await response.json();
                setColorways(data.results || []); // Adjust based on actual structure
            } catch (err) {
                console.error("Error fetching colorways:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchColorways();
    }, [shoe]); // Re-run when the `shoe` prop changes

    if (!shoe) {
        return <p className="text-center text-gray-400">Select a shoe to view details</p>;
    }

    return (
        <div className="p-4 space-y-4 bg-white rounded-lg shadow-md">
            <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-60 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold">{shoe.name}</h2>
            <p className="text-lg text-gray-500">{shoe.category}</p>

            {loading && <p className="text-gray-400">Loading colorways...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && colorways.length > 0 && (
                <ul className="space-y-2">
                    {colorways.map((colorway, index) => (
                        <li key={index} className="flex items-center space-x-4">
                            <img
                                src={colorway.image || "https://via.placeholder.com/150"}
                                alt={colorway.colorway}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <p className="text-gray-600">{colorway.colorway}</p>
                        </li>
                    ))}
                </ul>
            )}
            {!loading && !error && colorways.length === 0 && (
                <p className="text-gray-400">No colorways found for this shoe.</p>
            )}
        </div>
    );
}
