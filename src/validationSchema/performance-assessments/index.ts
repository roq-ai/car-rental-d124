import * as yup from 'yup';

export const performanceAssessmentValidationSchema = yup.object().shape({
  assessment_date: yup.date().required(),
  demand_score: yup.number().integer().nullable(),
  performance_score: yup.number().integer().nullable(),
  vehicle_id: yup.string().nullable(),
  analyst_id: yup.string().nullable(),
});
