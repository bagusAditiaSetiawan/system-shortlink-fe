import {TableColumn} from "react-data-table-component";
import {ShortedLinkItem} from "../../../services/shorted_link/shorted_link_service.tsx";

export default function TableColumnPage() {
    const columns: TableColumn<ShortedLinkItem>[] = [
        {
            name: 'Owner',
            selector: row => row.owner,
        },
        {
            name: 'Link Original',
            selector: row => row.link_original,
        },
        {
            name: 'Link Shorted',
            selector: row => row.link_shorted_full,
        },
        {
            name: 'Accessed',
            selector: row => row.num_of_accessed,
        },
        {
            name: "Visit",
            cell: (data) => {
                return <a href={data.link_shorted_full} target="_blank" className="text-base text-blue-500">GO</a>
            }
        }
    ];
    return columns
}