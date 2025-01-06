import { useState } from "react";
import dataGlasses from "./dataGlasses.json";

export const GlassesApp = () => {
    const [selectedGlasses, setSelectedGlasses] = useState(null);
    const handleSelectGlasses = (glasses) => {
        setSelectedGlasses(glasses);
    };    
    let glassesImage = null;
    if (selectedGlasses) {
        glassesImage = (
            <img
                src={selectedGlasses.url}
                alt={selectedGlasses.name}
                className="absolute top-[75px] left-[52px] w-[130px] opacity-50"
            />
        );
    }
    let glassesInfo = null;
    if (selectedGlasses) {
        glassesInfo = (
            <>
                <h2 className="text-2xl font-bold">{selectedGlasses.name}</h2>
                <p className="text-gray-500">{selectedGlasses.desc}</p>
                <p className="text-lg font-bold text-red-500">
                    ${selectedGlasses.price}
                </p>
            </>
        );
    } else {
        glassesInfo = (
            <p className="text-gray-400 italic">
                Please select a glass from the list.
            </p>
        );
    }
    return (
        <div className="min-h-screen bg-gray-200 p-5">
            <h1 className="text-center text-4xl font-bold mb-10 text-black">
                Try Glasses App Online
            </h1>
            <div className="flex justify-center items-center gap-10">
                <div className="relative">
                    <img
                        src="../public/glassesImage/model.jpg"
                        alt="model"
                        className="w-60 rounded-lg"
                    />
                    {glassesImage}
                    {

                    }
                </div>
                <div>
                    {

                    }

                    {glassesInfo}
                </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
                {dataGlasses.map((glasses) => (
                    <button
                        className="border p-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none"
                        key={glasses.id}
                        onClick={() => handleSelectGlasses(glasses)}
                    >
                        <img
                            src={glasses.url}
                            alt={glasses.name}
                            className="w-24 h-16 object-contain mx-auto"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}