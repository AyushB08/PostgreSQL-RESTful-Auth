import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFile, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Scan({ fileurl, onDelete, onReport }) {
    const [showReportCard, setShowReportCard] = useState(false);

    const handleReportClick = () => {
        setShowReportCard(!showReportCard);
    };

    const handleCloseReportCard = () => {
        setShowReportCard(false);
    };

    return (
        <div className="relative">
            <img
                src={fileurl}
                alt="User Image"
                className="w-full h-auto object-cover rounded-lg shadow-lg border-white border"
            />
            <button
                className="absolute top-2 right-2 bg-blue-500 text-white px-2 rounded"
                onClick={onDelete}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
                className="absolute top-10 right-2 bg-blue-500 text-white px-2 rounded"
                onClick={handleReportClick}
            >
                <FontAwesomeIcon icon={faFile} />
            </button>

            {showReportCard && (
                <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative w-1/3 bg-white p-4 rounded-lg shadow-lg">
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 rounded"
                            onClick={handleCloseReportCard}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <img
                            src={fileurl}
                            alt="User Image"
                            className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
                        />
                        <p className="text-black">This is the image you want to report.</p>
                    </div>
                </div>
            )}
        </div>
    );
}