import { GetQueryInterface } from 'interfaces';

export interface EmployeePromotionHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeePromotionHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
