import axios from 'axios';
import queryString from 'query-string';
import { EmployeeBenefitsInterface, EmployeeBenefitsGetQueryInterface } from 'interfaces/employee-benefits';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeBenefits = async (
  query?: EmployeeBenefitsGetQueryInterface,
): Promise<PaginatedInterface<EmployeeBenefitsInterface>> => {
  const response = await axios.get('/api/employee-benefits', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeeBenefits = async (employeeBenefits: EmployeeBenefitsInterface) => {
  const response = await axios.post('/api/employee-benefits', employeeBenefits);
  return response.data;
};

export const updateEmployeeBenefitsById = async (id: string, employeeBenefits: EmployeeBenefitsInterface) => {
  const response = await axios.put(`/api/employee-benefits/${id}`, employeeBenefits);
  return response.data;
};

export const getEmployeeBenefitsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/employee-benefits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmployeeBenefitsById = async (id: string) => {
  const response = await axios.delete(`/api/employee-benefits/${id}`);
  return response.data;
};
