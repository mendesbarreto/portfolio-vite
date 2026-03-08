import { DateTime } from 'luxon';

export function FromToDatesText({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string | null;
}) {
  const startDateFormatted = DateTime.fromISO(startDate).toFormat('LLL yyyy');
  const endDateFormatted = endDate ? DateTime.fromISO(endDate).toFormat('LLL yyyy') : 'Present';
  return (
    <p className="mt-2 text-sm">
      <span className="text-mTeal">{startDateFormatted}</span>
      <span className="text-mTeal">{' – '}</span>
      <span className="text-mTeal">{endDateFormatted}</span>
    </p>
  );
}
