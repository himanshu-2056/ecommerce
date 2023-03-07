import axios, { AxiosResponse } from "axios";
let API_URL = "https://fakestoreapi.com/products";

export default async function callApi(
        endpoint, method = "GET", body
    ): Promise<AxiosResponse<any, any>> {
    const response = await axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });

    return response!;
}
