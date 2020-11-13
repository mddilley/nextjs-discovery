const Users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          ID #{user.id} Name: {user.name} {user.surname}
        </div>
      ))}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  // This is a real endpoint
  const res = await fetch("http://localhost:8000/users");
  const usersData = await res.json();
  const users = usersData.users;

  return {
    props: {
      users: users,
      revalidate: 5
    }
  };
}
