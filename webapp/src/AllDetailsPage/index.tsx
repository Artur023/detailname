import { trpc } from '../lib/trpc';

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
      <h1>All details</h1>
      {data?.map((detail) => (
        <div key={detail.nick}>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
};
