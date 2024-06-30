import React from "react";


export default function TableHeader() {
    return (
        <div className="flex justify-between">
            <div>
                <h1 className="font-bold text-base">Shorted Link</h1>
            </div>
            <button className="py-2 px-4 border rounded-full text-sm font-semibold">Add</button>
        </div>
    )
}