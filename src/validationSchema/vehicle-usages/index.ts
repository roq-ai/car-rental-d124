import * as yup from 'yup';

export const vehicleUsageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  duration: yup.number().integer().nullable(),
  mileage: yup.number().integer().nullable(),
  vehicle_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
