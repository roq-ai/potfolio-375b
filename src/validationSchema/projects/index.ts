import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  developer_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
