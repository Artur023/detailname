import { useParams } from 'react-router';
import type { ViewIdeaRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';

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
    <div>
      <h1 className={css.title}>{data.detail.name}</h1>
      <h2 className={css.description}>{data.detail.description}</h2>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.detail.text }} />
    </div>
  );
};
