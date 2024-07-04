import DataTable from "react-data-table-component";
import React, {useCallback, useEffect, useState} from "react";
import TableHeader from "./table_header";
import TableColumnPage from "./table_column";
import {
    ShortedLinkItem,
    ShortedLinkPaginationParams,
    shortedLinkService
} from "./../../../services/shorted_link/shorted_link_service";
import {GetAccessToken} from "../../../services/token/token_service.tsx";
import {useLocation} from "react-router-dom";

export default function TablePage() {
    const accessToken = GetAccessToken()
    const location = useLocation();
    const [total, setTotal] = useState<number>(0)
    const [data, setData] = useState<ShortedLinkItem[]>([])
    const [filter, setFilter] = useState<ShortedLinkPaginationParams>({
        limit: 20,
        url: "",
        page: 1,
    })
    const handleTableShortedLink = useCallback(() => {
        shortedLinkService.paginate(filter, accessToken).then(res => {
            setData(res.data)
            setTotal(res.total)
        })
    }, [accessToken, filter])

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleTableShortedLink()
        }, 2000)
        return () => clearTimeout(timeout)
    }, [handleTableShortedLink, accessToken, filter, location.pathname])

    const subHeaderComponentMemo = React.useMemo(() => {
        return (<div><input onChange={(e) => setFilter(item => ({
            ...item,
            url: e.target.value,
            }))}
           type="text"
           className="border py-1 px-2 text-sm border-solid border-gray-400" />
        </div>)
    }, []);


    return <DataTable subHeader onChangeRowsPerPage={perPage =>
        setFilter(item => ({
            ...item,
            limit: perPage,
        }))
    } subHeaderComponent={subHeaderComponentMemo} onChangePage={page => setFilter(item => ({
        ...item,
        page
    }))} pagination paginationPerPage={filter.limit} paginationTotalRows={total} persistTableHead title={<TableHeader/>} columns={TableColumnPage()} data={data}/>;
}