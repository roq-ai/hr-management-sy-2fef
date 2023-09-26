interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Payroll Officer', 'Employee', 'Admin', 'Power User', 'Reviewer', 'Viewer'],
  tenantName: 'Organization',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View employee personal data',
    'View employee training records',
    'View employee promotion history',
    'View employee attendance',
  ],
  ownerAbilities: [
    'Manage employee personal data',
    'Manage employee training records',
    'Manage employee promotion history',
    'Manage employee attendance',
    'Manage department structure',
    'Manage employee benefits',
    'Manage user data',
    'Manage organization data',
    'Manage vacation data',
    'Manage time tracking data',
    'Manage payroll data',
    'Manage performance evaluations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c005bf55-b716-4799-8cfd-ec072349f11a',
};
