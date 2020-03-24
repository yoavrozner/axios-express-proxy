import express from 'express';
import axios, { Method, AxiosResponse } from 'axios';

export const ExpressToAxios = async (url: string, request: express.Request): Promise<AxiosResponse<any>> =>
    axios({
        url: url,
        method: request.method as Method,
        headers: request.headers,
        params: request.params,
        data: request.body
    });

export const AxiosToExpress = async (axiosResponse: AxiosResponse, expressResponse: express.Response): Promise<express.Response<any>> =>
    expressResponse.status(axiosResponse.status).header(axiosResponse.headers).send(axiosResponse.data);

export const Proxy = async (url: string, request: express.Request, response: express.Response) =>
    AxiosToExpress(await ExpressToAxios(url, request), response);
