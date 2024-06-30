import AdminNavbar from "@/components/admin/navbar/admin.navbar";
import TablePage from "@/app/admin/shortlink/table_page";


export default function DashboardPage() {
    return (
        <div>
            <AdminNavbar />
            <div className="mt-4">
                <div className="mx-auto bg-white max-w-7xl p-6 lg:px-8"
                     aria-label="Global">
                    <TablePage />
                </div>
            </div>
        </div>
    )
}