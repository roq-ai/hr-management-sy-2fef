import { GetQueryInterface } from 'interfaces';

export interface EmployeeAttendanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeAttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
