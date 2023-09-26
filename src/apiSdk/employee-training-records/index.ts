import axios from 'axios';
import queryString from 'query-string';
import {
  EmployeeTrainingRecordsInterface,
  EmployeeTrainingRecordsGetQueryInterface,
} from 'interfaces/employee-training-records';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeTrainingRecords = async (
  query?: EmployeeTrainingRecordsGetQueryInterface,
): Promise<PaginatedInterface<EmployeeTrainingRecordsInterface>> => {
  const response = await axios.get('/api/employee-training-records', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeeTrainingRecords = async (employeeTrainingRecords: EmployeeTrainingRecordsInterface) => {
  const response = await axios.post('/api/employee-training-records', employeeTrainingRecords);
  return response.data;
};

export const updateEmployeeTrainingRecordsById = async (
  id: string,
  employeeTrainingRecords: EmployeeTrainingRecordsInterface,
) => {
  const response = await axios.put(`/api/employee-training-records/${id}`, employeeTrainingRecords);
  return response.data;
};

export const getEmployeeTrainingRecordsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/employee-training-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteEmployeeTrainingRecordsById = async (id: string) => {
  const response = await axios.delete(`/api/employee-training-records/${id}`);
  return response.data;
};
