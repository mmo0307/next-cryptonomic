import { withField } from 'formik-toolkit';

import { Input } from '@/shared/ui/atoms/Input';
import { Select } from '@/shared/ui/molecules/Select';

const Field = {
  Input: withField(Input),

  Select: withField(Select)
};

export { Field };
