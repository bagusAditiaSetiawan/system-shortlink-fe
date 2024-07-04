import {AxiosInstance} from "axios";
import {client_request} from "./../client_request";

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


export interface ResponseShortedLinkCreate {
    errorMessage: string[]
    data?: ShortedLinkItem,
}

export type ShortedLinkCreate = {
    url: string
}

export interface ResponseShortedLinkCreateSuccess {
    data: ShortedLinkItem
}


export interface ShortedLinkService {
    paginate(params: ShortedLinkPaginationParams, access_token: string): Promise<ResponseShortedLink>
    create(params: ShortedLinkCreate, access_token: string): Promise<ResponseShortedLinkCreate>
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
        })).catch(err => {
            return {
                errorMessage: err?.response?.data?.errors ?? [],
                data: [],
                total: 0,
            }
        })
    }

    async create(params: ShortedLinkCreate, access_token: string): Promise<ResponseShortedLinkCreate> {
        return this.client_request.post<ResponseShortedLinkCreateSuccess>("/shorted-link", params, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(res => ({
            errorMessage: [],
            data: res.data.data
        })).catch(err => {
            return {
                errorMessage: err?.response?.data?.errors as string[] ?? [],
                data: {} as ShortedLinkItem,
            }
        })
    }
}

export const shortedLinkService = new ShortedLinkServiceImpl(client_request);