import { getViewModelRoute } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import { Link } from 'react-router';
import css from './index.module.scss';
import { Segment } from '../../components/Segment';

export const AllModelsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getModels.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Segment title="All Models" size={1}>
      <div className={css.ideas}>
        {data?.models?.map((model) => (
          <div className={css.idea} key={model.nick}>
            <Segment
              title={
                <Link className={css.ideaLink} to={getViewModelRoute({ modelNick: model.nick })}>
                  {model.name}
                </Link>
              }
              size={2}
              description={model.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  );
};
