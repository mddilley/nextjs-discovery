import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Issues = ({ issues }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <h1>DTS Github Issues</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Issue</TableCell>
              <TableCell align="left">Pipeline</TableCell>
              <TableCell align="left">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map(issue => (
              <TableRow key={issue.id}>
                <TableCell>
                  <Link
                    href={`https://github.com/cityofaustin/atd-data-tech/issues/${issue.number}`}
                  >
                    {`#${issue.number}`}
                  </Link>
                </TableCell>
                <TableCell>Pipeline: {issue.pipeline}</TableCell>
                <TableCell>{issue.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
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
