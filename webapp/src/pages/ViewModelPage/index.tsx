import { useParams } from 'react-router';
import type { ViewIdeaRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';
import { Segment } from '../../components/Segment';

export const ViewModelPage = () => {
  const { modelNick } = useParams() as ViewIdeaRouteParams;
  const { data, error, isLoading, isFetching, isError } = trpc.getModel.useQuery({ modelNick });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  if (!data?.model) {
    return <span>No find any model</span>;
  }

  return (
    <Segment title={data.model.name} description={data.model.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.model.text }} />
    </Segment>
  );
};
