import { useState } from "react";
import Image from "next/image";

const Diagnosis = ({ fileurl, modeltype }) => {
    const [loading, setLoading] = useState(false);

    const handleViewResults = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/process-scan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fileurl, modeltype }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Results:', data); 
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
            <p className="text-white">Here is your image</p>
            <Image alt="Your Scan" src={fileurl} width={200} height={200} />

            <button 
                onClick={handleViewResults}
                className="flex flex-col items-center justify-center text-white bg-blue-600 px-3 py-2 mt-4 rounded-lg"
            >
                {loading ? (
                    <h1 className="text-xl font-bold">Processing...</h1>
                ) : (
                    <>
                        <h1 className="text-xl font-bold">View Results</h1>
                        <h2 className="text-sm text-gray-300">This may take some time</h2>
                    </>
                )}
            </button>
        </div>
    );
};

export default Diagnosis;