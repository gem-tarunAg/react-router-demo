import { useParams } from 'react-router-dom';

export const UserDetails = () => {
  const { userId } = useParams();
  return (
    <>
      <h1 className="text-lg my-2 px-2">Details of the User {userId}</h1>
    </>
  );
};
