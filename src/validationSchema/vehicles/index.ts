import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().nullable(),
  color: yup.string().nullable(),
  license_plate: yup.string().required(),
  owner_id: yup.string().nullable(),
});
