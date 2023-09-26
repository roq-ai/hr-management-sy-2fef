import { GetQueryInterface } from 'interfaces';

export interface EmployeeBenefitsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeBenefitsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
