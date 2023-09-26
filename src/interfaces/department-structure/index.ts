import { GetQueryInterface } from 'interfaces';

export interface DepartmentStructureInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DepartmentStructureGetQueryInterface extends GetQueryInterface {
  id?: string;
}
