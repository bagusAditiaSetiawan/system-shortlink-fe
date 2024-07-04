import TablePage from "./table_page.tsx";
import {Outlet} from "react-router-dom";


export default function ShortlinkPage() {
    return (
        <div>
            <Outlet />
            <div className="mt-4">
                <div className="mx-auto bg-white max-w-7xl p-6 lg:px-8"
                     aria-label="Global">
                    <TablePage />
                </div>
            </div>
        </div>
    )
}