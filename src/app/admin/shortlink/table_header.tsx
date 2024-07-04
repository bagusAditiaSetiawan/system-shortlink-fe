import {Link} from "react-router-dom";

export default function TableHeader() {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-base">Shorted Link</h1>
                </div>
                <Link to={"/admin/shortlink/add"} className="hover:cursor-pointer py-2 px-4 border rounded-full text-sm font-semibold">Add</Link>
            </div>
        </>
    )
}