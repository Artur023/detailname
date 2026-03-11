import { getViewDetailRoute } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import { Link } from 'react-router';
import css from './index.module.scss';

export const AllDetailsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getDetails.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1 className={css.title}>All details</h1>
      <div className={css.ideas}>
        {data?.details?.map((detail) => (
          <div className={css.idea} key={detail.nick}>
            <h2 className={css.ideaName}>
              <Link className={css.ideaLink} to={getViewDetailRoute({ detailNick: detail.nick })}>{detail.name}</Link>
            </h2>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
