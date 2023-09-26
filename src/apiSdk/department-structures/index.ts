import axios from 'axios';
import queryString from 'query-string';
import { DepartmentStructureInterface, DepartmentStructureGetQueryInterface } from 'interfaces/department-structure';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDepartmentStructures = async (
  query?: DepartmentStructureGetQueryInterface,
): Promise<PaginatedInterface<DepartmentStructureInterface>> => {
  const response = await axios.get('/api/department-structures', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDepartmentStructure = async (departmentStructure: DepartmentStructureInterface) => {
  const response = await axios.post('/api/department-structures', departmentStructure);
  return response.data;
};

export const updateDepartmentStructureById = async (id: string, departmentStructure: DepartmentStructureInterface) => {
  const response = await axios.put(`/api/department-structures/${id}`, departmentStructure);
  return response.data;
};

export const getDepartmentStructureById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/department-structures/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteDepartmentStructureById = async (id: string) => {
  const response = await axios.delete(`/api/department-structures/${id}`);
  return response.data;
};
