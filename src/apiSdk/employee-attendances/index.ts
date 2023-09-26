import axios from 'axios';
import queryString from 'query-string';
import { EmployeeAttendanceInterface, EmployeeAttendanceGetQueryInterface } from 'interfaces/employee-attendance';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeAttendances = async (
  query?: EmployeeAttendanceGetQueryInterface,
): Promise<PaginatedInterface<EmployeeAttendanceInterface>> => {
  const response = await axios.get('/api/employee-attendances', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeeAttendance = async (employeeAttendance: EmployeeAttendanceInterface) => {
  const response = await axios.post('/api/employee-attendances', employeeAttendance);
  return response.data;
};

export const updateEmployeeAttendanceById = async (id: string, employeeAttendance: EmployeeAttendanceInterface) => {
  const response = await axios.put(`/api/employee-attendances/${id}`, employeeAttendance);
  return response.data;
};

export const getEmployeeAttendanceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/employee-attendances/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmployeeAttendanceById = async (id: string) => {
  const response = await axios.delete(`/api/employee-attendances/${id}`);
  return response.data;
};
