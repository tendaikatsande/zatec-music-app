import React from "react";
import { FaWindowClose } from "react-icons/fa";

export default function ShowSuccess({ success }) {
    
    return (
        success && (
            <div className=" border border-green-400 p-3 w-full text-sm font-thin bg-green-200 rounded rounded flex">
                <span className="flex-grow">{success}</span>
                <button className="rounded-full p-2 hover:bg-slate-100">
                    <FaWindowClose />
                </button>
            </div>
        )
    );
}
