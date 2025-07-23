export function formatCurrency(cents) {
  return `$${(Math.abs(cents) / 100).toFixed(2)}`;
}
