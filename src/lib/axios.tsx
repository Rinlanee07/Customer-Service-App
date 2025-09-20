import { CreateCategory, CreateSupplier, CreateWarehouseData, PostClaimOrderData, TransactionCustomer } from "@/datatype/post.datatype";
import axios, { AxiosResponse } from "axios";
import cookie from "cookiejs";

interface deleteSupplier {
    name: string;
    id: number;
}

interface FetchDataOptions {
    page?: number;
    limit?: number;
    [key: string]: any;
}

export const fetchData = async (name: string, options: FetchDataOptions = {}) => {
    const token = cookie.get('token');
    if (!token) {
        throw new Error('No token found');
    }

    // Build the query parameters string dynamically
    const queryParams = new URLSearchParams();

    // Add query parameters dynamically from the options object
    Object.entries(options).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            queryParams.append(key, value.toString());
        }
    });

    // Construct the URL with query parameters (if any)
    const url = `${process.env.NEXT_PUBLIC_HOST}/api/${name}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

    // Perform the request with token authorization
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.dataQuery;
};

export const fetchwithText = async (name: string, text: string): Promise<Blob> => {
    const token = cookie.get('token');
    const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/${name}/${text}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Set response type to blob for binary data
    });

    return response.data; // Return the blob data
};

export const deleteSupplier = async (id: number): Promise<void> => {
    const token = cookie.get('token');
    await axios.delete(`${process.env.NEXT_PUBLIC_HOST}/api/supplier/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const deleteItem = async (id: number): Promise<void> => {

    const token = cookie.get('token');
    await axios.delete(`${process.env.NEXT_PUBLIC_HOST}/api/item/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const deleteCategory = async (id: number): Promise<void> => {
    const token = cookie.get('token');
    await axios.delete(`${process.env.NEXT_PUBLIC_HOST}/api/category/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const postSupplier = async (data: CreateSupplier): Promise<void> => {
    const token = cookie.get('token');
    return axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/supplier/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const postCategory = async (data: CreateCategory): Promise<void> => {
    const token = cookie.get('token');
    return axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/category/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const postWarehouse = async (data: CreateWarehouseData): Promise<void> => {
    const token = cookie.get('token');
    return axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/warehouse/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
export const postGoodsReceived = async (data: []): Promise<void> => {
    const token = cookie.get('token');
    return axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/goodreceive/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const postImplementation = async (data: TransactionCustomer): Promise<AxiosResponse> => {
    const token = cookie.get('token');
    return await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/transactioncustomer/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const postClaimOrder = async (data: PostClaimOrderData): Promise<void> => {
    const token = cookie.get('token');
    return axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/claimorder/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export const patchData = async (name: string, id: number, data: any): Promise<AxiosResponse<any>> => {
    const token = cookie.get('token');
    return axios.patch(`${process.env.NEXT_PUBLIC_HOST}/api/${name}/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}