// Rough planning allowances, not delivery commitments or measured historical data.
export function estimateReactScope(description: string) {
  if (description.trim().split(/\s+/).length < 5) return null;
  const rules: [string, RegExp, number, number][] = [
    ['Dashboard and reporting views', /\b(dashboard|analytics|reports?|charts?)\b/i, 24, 48],
    ['Sign-in and user access', /\b(login|log-in|sign[ -]?in|sign[ -]?up|auth(?:entication)?|user accounts?|permissions?|roles?)\b/i, 16, 32],
    ['Forms and editable records', /\b(forms?|crud|create|edit|delete|records?|validation)\b/i, 16, 32],
    ['API and data integration', /\b(api|apis|integrat\w*|database|backend|back-end)\b/i, 16, 40],
    ['Commerce and payments', /\b(shop|store|ecommerce|e-commerce|checkout|payments?|stripe|cart)\b/i, 32, 64],
    ['Live updates and messaging', /\b(real[ -]?time|live updates?|chat|messaging|websockets?)\b/i, 24, 48],
    ['Search and filtering', /\b(search|filters?|filtering|sorting)\b/i, 8, 20],
    ['Existing application changes', /\b(existing|refactor\w*|migrat\w*|bug\w*|fix\w*|debug\w*)\b/i, 12, 32],
  ];
  const detected = rules.filter(([, pattern]) => pattern.test(description));
  if (!detected.length) return null;
  const items = [
    { name: 'Setup, responsive interface and handover', low: 16, high: 24 },
    ...detected.map(([name, , low, high]) => ({ name, low, high })),
  ];
  // Include a 20% allowance for review, testing and coordination.
  const low = Math.ceil(items.reduce((sum, item) => sum + item.low, 0) * 1.2 / 4) * 4;
  const high = Math.ceil(items.reduce((sum, item) => sum + item.high, 0) * 1.2 / 4) * 4;
  return { low, high, suggested: Math.round((low + high) / 8) * 4, items };
}
