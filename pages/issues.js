import Link from "next/link";

const Issues = ({ issues }) => {
  return (
    <div>
      <h1>DTS Github Issues</h1>
      {issues.map(issue => (
        <div key={issue.id}>
          <div>
            <Link
              href={`https://github.com/cityofaustin/atd-data-tech/issues/${issue.number}`}
            >
              {`Issue ${issue.number}`}
            </Link>
          </div>
          <div>Pipeline: {issue.pipeline}</div>
          <div>{issue.title}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Issues;

export async function getServerSideProps() {
  // This is a real endpoint
  const res = await fetch(
    "https://data.austintexas.gov/resource/rzwg-fyv8.json?$limit=10"
  );
  const issuesData = await res.json();
  const issues = issuesData;

  return {
    props: {
      issues: issues
    }
  };
}
