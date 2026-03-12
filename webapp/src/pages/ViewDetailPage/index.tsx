import { useParams } from 'react-router';
import type { ViewIdeaRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';
import { Segment } from '../../components/Segment';

export const ViewDetailPage = () => {
  const { detailNick } = useParams() as ViewIdeaRouteParams;
  const { data, error, isLoading, isFetching, isError } = trpc.getDetail.useQuery({ detailNick });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  if (!data?.detail) {
    return <span>No find any detail</span>;
  }

  return (
    <Segment title={data.detail.name} description={data.detail.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.detail.text }} />
    </Segment>
  );
};
