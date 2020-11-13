const Users = ({ users }) => {
  return (
    <div>
      <h1>Hello!</h1>
      {users.map(user => (
        <div key={user.id}>
          Account #{user.id} Description: {user.description}
        </div>
      ))}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  // This is a real endpoint
  const res = await fetch("https://sampleapis.com/fakebank/api/Accounts");
  const usersData = await res.json();
  const users = usersData.users;

  return {
    props: {
      users: users,
      revalidate: 5
    }
  };
}
