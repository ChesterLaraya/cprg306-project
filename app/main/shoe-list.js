"use client";
import Shoe from "./shoe";
import { useState } from "react";

export default function ShoeList({ shoes, onSelectShoes }) {
    const [filter, setFilter] = useState("All"); // "All" means show all shoes

    // Filter logic
    const filteredShoes = filter === "All" 
        ? shoes 
        : shoes.filter((shoe) => shoe.category === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => setFilter("All")}
                    className={`px-4 py-2 rounded-lg ${
                        filter === "All" ? "bg-blue-500 text-white" : "bg-gray-300} bg-gray-300 hover:bg-gray-400"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("Low Tops")}
                    className={`px-4 py-2 rounded-lg ${
                        filter === "Low Tops" ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                >
                    Low Tops
                </button>
                <button
                    onClick={() => setFilter("Mid Tops")}
                    className={`px-4 py-2 rounded-lg ${
                        filter === "Mid Tops" ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                >
                    Mid Tops
                </button>
                <button
                    onClick={() => setFilter("High Tops")}
                    className={`px-4 py-2 rounded-lg ${
                        filter === "High Tops" ? "bg-blue-500 text-white" : "bg-gray-300"
                    }`}
                >
                    High Tops
                </button>
            </div>

            {/* Shoe List */}
            <div className="flex overflow-x-auto space-x-4 pb-4">
                {filteredShoes.map((shoe) => (
                    <Shoe
                        key={shoe.id}
                        name={shoe.name}
                        category={shoe.category}
                        image={shoe.image}
                        onShoeSelect={onSelectShoes}
                    />
                ))}
            </div>
        </div>
    );
}
