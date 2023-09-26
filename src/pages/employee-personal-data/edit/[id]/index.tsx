import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getEmployeePersonalDataById, updateEmployeePersonalDataById } from 'apiSdk/employee-personal-data';
import { employeePersonalDataValidationSchema } from 'validationSchema/employee-personal-data';
import { EmployeePersonalDataInterface } from 'interfaces/employee-personal-data';

function EmployeePersonalDataEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<EmployeePersonalDataInterface>(
    () => (id ? `/employee-personal-data/${id}` : null),
    () => getEmployeePersonalDataById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: EmployeePersonalDataInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateEmployeePersonalDataById(id, values);
      mutate(updated);
      resetForm();
      router.push('/employee-personal-data');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<EmployeePersonalDataInterface>({
    initialValues: data,
    validationSchema: employeePersonalDataValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Employee Personal Data',
              link: '/employee-personal-data',
            },
            {
              label: 'Update Employee Personal Data',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Employee Personal Data
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.emergency_contact}
            label={'Emergency Contact'}
            props={{
              name: 'emergency_contact',
              placeholder: 'Emergency Contact',
              value: formik.values?.emergency_contact,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.marital_status}
            label={'Marital Status'}
            props={{
              name: 'marital_status',
              placeholder: 'Marital Status',
              value: formik.values?.marital_status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_personal_data}
            label={'Employee Personal Data'}
            props={{
              name: 'employee_personal_data',
              placeholder: 'Employee Personal Data',
              value: formik.values?.employee_personal_data,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_photo}
            label={'Employee Photo'}
            props={{
              name: 'employee_photo',
              placeholder: 'Employee Photo',
              value: formik.values?.employee_photo,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.employee_address}
            label={'Employee Address'}
            props={{
              name: 'employee_address',
              placeholder: 'Employee Address',
              value: formik.values?.employee_address,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/employee-personal-data')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'employee_personal_data',
    operation: AccessOperationEnum.UPDATE,
  }),
)(EmployeePersonalDataEditPage);
