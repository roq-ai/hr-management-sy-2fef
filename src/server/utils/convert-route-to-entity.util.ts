const mapping: Record<string, string> = {
  'department-structures': 'department_structure',
  'employee-attendances': 'employee_attendance',
  'employee-benefits': 'employee_benefits',
  'employee-personal-data': 'employee_personal_data',
  'employee-promotion-histories': 'employee_promotion_history',
  'employee-training-records': 'employee_training_records',
  organizations: 'organization',
  payrolls: 'payroll',
  'performance-evaluations': 'performance_evaluation',
  'time-trackings': 'time_tracking',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
