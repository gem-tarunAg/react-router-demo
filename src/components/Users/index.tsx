import { useSearchParams } from 'react-router-dom';

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActive = searchParams.get('filter') === 'active';
  return (
    <>
      <h1 className="text-4xl text-center my-4">Users</h1>
      {/* <p>User 1</p>
      <p>User 2</p>
      <p>User 3</p>
      <Outlet /> */}
      <div className="flex flex-row justify-around">
        <button
          className="w-1/8 h-14 p-2 bg-red-800 my-5 text-xl text-white rounded-2xl border-2"
          onClick={() => setSearchParams({ filter: 'active' })}
        >
          Active Users
        </button>
        <button
          className="w-1/8 h-14 p-2 bg-red-800 my-5 text-xl text-white rounded-2xl border-2"
          onClick={() => setSearchParams({})}
        >
          Reset Filter
        </button>
      </div>
      {showActive ? (
        <h1 className="text-lg my-4 mx-2">Showing Active Users</h1>
      ) : (
        <h1 className="text-lg my- mx-2">Showing All Users</h1>
      )}
    </>
  );
};
