import * as yup from 'yup';

export const employeePersonalDataValidationSchema = yup.object().shape({
  emergency_contact: yup.string().nullable(),
  marital_status: yup.string().nullable(),
  employee_personal_data: yup.string().nullable(),
  employee_photo: yup.string().nullable(),
  employee_address: yup.string().nullable(),
});
