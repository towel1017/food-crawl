import axios, { Method } from 'axios';


interface requestCustomAxiosType {
  method: Method;
  url: string;
  params?: object;
  body?: object;
  header?: object;
}

export const methodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const requestCustomAxios = async (
  {method, url, params, body, header} : requestCustomAxiosType
) => {
  try {
    const response = await axios({
      baseURL : "https://api.notion.com/v1",
      url: url,
      params : params,
      data: body,
      method: method,
      headers: {
        ...header
      }
    })
    return response;
  } catch (error) {
    throw error
  }
}