export async function getOpenIssues() {
  const response = await fetch(
    "https://api.github.com/repos/every-io/demo-issues/issues"
  );
  const parsedResponse = await response.json();
  return parsedResponse;
}

export async function getClosedIssues() {
  const response = await fetch(
    "https://api.github.com/repos/every-io/demo-issues/issues?state=closed"
  );
  const parsedResponse = await response.json();
  return parsedResponse;
}
