"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-shoe";
import ShoeList from "./shoe-list";
import ShoesColorway from "./shoe-colorway";
import jordans from "./jordan-data";

export default function Page() {
    const [shoes, setShoes] = useState(jordans);
    const [selectedShoe, setSelectedShoe] = useState(null);

    useEffect(() => {
        const storedShoes = JSON.parse(localStorage.getItem("shoes"));
        if (storedShoes) setShoes(storedShoes);
    }, []);

    useEffect(() => {
        localStorage.setItem("shoes", JSON.stringify(shoes));
    }, [shoes]);

    const handleAddShoe = (newShoe) => {
        setShoes((prevShoes) => [...prevShoes, newShoe]);
    };

    const handleSelectShoe = (shoe) => {
        setSelectedShoe(shoe);
    };

    return (
        <main className="bg-slate-700 min-h-screen flex flex-col items-center py-6">
            <h1 className="text-4xl text-neutral-300 font-bold mb-6">Sole</h1>
            <div className="w-full max-w-4xl space-y-6">
                <NewItem onAddShoe={handleAddShoe} />
                <div className="bg-gray-500 p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Shoe List</h2>
                    <ShoeList shoes={shoes} onSelectShoes={handleSelectShoe} />
                </div>
                <div className="bg-gray-500 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Shoe Details</h2>
                    <ShoesColorway shoe={selectedShoe} />
                </div>
            </div>
        </main>
    );
}
