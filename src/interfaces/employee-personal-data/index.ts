import { GetQueryInterface } from 'interfaces';

export interface EmployeePersonalDataInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  emergency_contact?: string;
  marital_status?: string;
  employee_personal_data?: string;
  employee_photo?: string;
  employee_address?: string;

  _count?: {};
}

export interface EmployeePersonalDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  emergency_contact?: string;
  marital_status?: string;
  employee_personal_data?: string;
  employee_photo?: string;
  employee_address?: string;
}
