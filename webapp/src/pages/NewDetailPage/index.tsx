import { Segment } from '../../components/Segment';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { useFormik } from 'formik';

export function NewDetailPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    onSubmit: (values) => {
      console.info(values);
    },
  });
  return (
    <Segment title={'New Detail'}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.info(formik.values);
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        <button type="submit">Submit</button>
      </form>
    </Segment>
  );
}
