import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";

export default function ShowError({ error }) {
    const [flashMessage, setFlashMessage] = useState(false);
    useEffect(() => setFlashMessage(error));

    const handleClose = () => {
        setFlashMessage(false);
    };
    return (
        flashMessage && (
            <div className="border border-red-400 p-3 w-full text-sm font-thin bg-red-200 rounded flex">
                <span className="flex-grow">{error}</span>
                <button
                    className="rounded p-2 hover:bg-slate-200"
                    onClick={() => handleClose()}
                >
                    <FaWindowClose />
                </button>
            </div>
        )
    );
}
