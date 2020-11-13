import { useRouter } from "next/router";
import { useState } from "react";

const Users = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  // This component demos fast refresh and router query string params
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  console.log(router);

  return (
    <h1 onClick={handleClick}>
      This is user's ID is {router.query.id} and the count is {count}
    </h1>
  );
};

export default Users;
