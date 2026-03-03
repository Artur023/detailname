import { useParams } from 'react-router';

export const ViewDetailPage = () => {
  const { detailNick } = useParams() as { detailNick: string };
  return (
    <div>
      <h1>{detailNick}</h1>
      <p>description 1</p>
      <div>
        <p>Text paragraph 1 of detail 1</p>
        <p>Text paragraph 2 of detail 1</p>
        <p>Text paragraph 3 of detail 1</p>
      </div>
    </div>
  );
};
