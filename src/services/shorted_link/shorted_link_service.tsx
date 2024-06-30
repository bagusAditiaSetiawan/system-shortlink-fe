import {AxiosInstance} from "axios";
import {client_request} from "@/services/client_request";

export interface ShortedLinkPaginationParams {
    page: number
    limit: number
    url: string
}

export interface ShortedLinkItem {
    id: number
    link_original: string
    link_shorted_full: string
    num_of_accessed: number
    owner: string
}

export interface ResponseShortedLinkSuccess {
    data: {
        list: ShortedLinkItem[]
        total: number
    }
}

export interface ResponseShortedLink {
    errorMessage: string[]
    data: ShortedLinkItem[],
    total: number
}


export interface ShortedLinkService {
    paginate(params: ShortedLinkPaginationParams, access_token: string): Promise<ResponseShortedLink>
}


class ShortedLinkServiceImpl implements ShortedLinkService {
    client_request: AxiosInstance

    constructor(client_request: AxiosInstance) {
        this.client_request = client_request
    }

    async paginate(params: ShortedLinkPaginationParams, access_token: string): Promise<ResponseShortedLink> {
        return this.client_request.post<ResponseShortedLinkSuccess>("/shorted-link/list", params, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(res => ({
            errorMessage: [],
            data: res.data.data.list,
            total: res.data.data.total,
        }))
    }
}

export const shortedLinkService = new ShortedLinkServiceImpl(client_request);