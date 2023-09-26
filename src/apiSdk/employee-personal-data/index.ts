import axios from 'axios';
import queryString from 'query-string';
import {
  EmployeePersonalDataInterface,
  EmployeePersonalDataGetQueryInterface,
} from 'interfaces/employee-personal-data';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeePersonalData = async (
  query?: EmployeePersonalDataGetQueryInterface,
): Promise<PaginatedInterface<EmployeePersonalDataInterface>> => {
  const response = await axios.get('/api/employee-personal-data', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeePersonalData = async (employeePersonalData: EmployeePersonalDataInterface) => {
  const response = await axios.post('/api/employee-personal-data', employeePersonalData);
  return response.data;
};

export const updateEmployeePersonalDataById = async (
  id: string,
  employeePersonalData: EmployeePersonalDataInterface,
) => {
  const response = await axios.put(`/api/employee-personal-data/${id}`, employeePersonalData);
  return response.data;
};

export const getEmployeePersonalDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/employee-personal-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteEmployeePersonalDataById = async (id: string) => {
  const response = await axios.delete(`/api/employee-personal-data/${id}`);
  return response.data;
};
