import { useRouter } from "next/router";

const Users = () => {
  const router = useRouter();

  console.log(router);

  return <h1>This is user {router.query.id}</h1>;
};

export default Users;
