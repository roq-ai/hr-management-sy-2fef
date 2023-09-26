import { GetQueryInterface } from 'interfaces';

export interface EmployeeTrainingRecordsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeTrainingRecordsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
