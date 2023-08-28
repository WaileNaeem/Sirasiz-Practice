import * as yup from 'yup';

export const generateSchema = params => {
  const keys = Object?.keys(params);
  const schema = {};
  keys?.map(key => {
    if (key.indexOf('firstName') !== -1) {
      schema[key] = yup
        ?.string()
        ?.min(3, 'First name must be at least 3 character')
        ?.max(50)
        ?.matches(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/, 'Please enter valid first name')
        ?.required('First name is required')
        ?.label('First Name');
    } else if (key.indexOf('lastName') !== -1) {
      schema[key] = yup
        ?.string()
        ?.min(3, 'Last name must be at least 3 character')
        ?.max(50)
        ?.matches(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/, 'Please enter valid last name')
        ?.required('Last name is required')
        ?.label('Last Name');
    } else if (key.indexOf('phoneNumber') !== -1) {
      schema[key] = yup?.string()?.min(11)?.required()?.label('Phone Number');
    } else {
      schema[key] = yup?.string().required(`${key} is required`);
    }
  });
  return yup.object()?.shape(schema);
};
