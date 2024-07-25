export function getApiUrl() {
  const url = process.env.REACT_APP_END_POINT || "http://localhost:5001";
  return `${url}/`;
}
