import axios from 'axios';
import queryString from 'query-string';
import {
  EmployeePromotionHistoryInterface,
  EmployeePromotionHistoryGetQueryInterface,
} from 'interfaces/employee-promotion-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeePromotionHistories = async (
  query?: EmployeePromotionHistoryGetQueryInterface,
): Promise<PaginatedInterface<EmployeePromotionHistoryInterface>> => {
  const response = await axios.get('/api/employee-promotion-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeePromotionHistory = async (employeePromotionHistory: EmployeePromotionHistoryInterface) => {
  const response = await axios.post('/api/employee-promotion-histories', employeePromotionHistory);
  return response.data;
};

export const updateEmployeePromotionHistoryById = async (
  id: string,
  employeePromotionHistory: EmployeePromotionHistoryInterface,
) => {
  const response = await axios.put(`/api/employee-promotion-histories/${id}`, employeePromotionHistory);
  return response.data;
};

export const getEmployeePromotionHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/employee-promotion-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteEmployeePromotionHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/employee-promotion-histories/${id}`);
  return response.data;
};
