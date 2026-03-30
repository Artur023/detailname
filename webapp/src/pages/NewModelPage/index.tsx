import { Segment } from '../../components/Segment';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

export function NewModelPage() {
  const schema = z.object({
    name: z.string({ error: 'Name is required' }).min(1, 'Name is required'),
    nick: z
      .string({ error: 'Nick is required' })
      .min(1, 'Nick is required')
      .regex(/^[a-z0-9-]+$/, 'Nick may contain only lowercase letters, numbers and dashes'),
    description: z.string({ error: 'Description is required' }).min(1, 'Description is required'),
    text: z
      .string({ error: 'Text is required' })
      .min(1, 'Text is required')
      .min(100, 'Text should be at least 100 characters long'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: (values) => {
      console.info('Submitted', values);
    },
  });
  return (
    <Segment title={'New Model'}>
      <form onSubmit={formik.handleSubmit}>
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        {!formik.isValid && !!formik.submitCount && <div style={{ color: 'red' }}>Some fields are invalid</div>}
        <button type="submit">Submit</button>
      </form>
    </Segment>
  );
}
