import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Users = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(null);

  // This component demos fast refresh and router query string params
  const handleClick = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  console.log(router);

  return (
    <>
      <h1>
        This is user's ID is {router.query.id} and the count is {count}
      </h1>
      <button onClick={handleClick}>Decrement</button>
      <div>
        <input
          type="text"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <Link href={`/users/${userId}`}>Go to user ID entered</Link>
      </div>
    </>
  );
};

export default Users;
