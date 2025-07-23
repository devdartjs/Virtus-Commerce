export function formatDate(ms) {
  const date = new Date(ms);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
}
