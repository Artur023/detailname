import { getViewDetailRoute } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import { Link } from 'react-router';
import css from './index.module.scss';
import { Segment } from '../../components/Segment';

export const AllDetailsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getDetails.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Segment title="All Details" size={1}>
      <div className={css.ideas}>
        {data?.details?.map((detail) => (
          <div className={css.idea} key={detail.nick}>
            <Segment
              title={
                <Link className={css.ideaLink} to={getViewDetailRoute({ detailNick: detail.nick })}>
                  {detail.name}
                </Link>
              }
              size={2}
              description={detail.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  );
};
