export const StatusBadge = ({ status }: { status: string }) => {
	const styles: Record<string, string> = {
		VERIFIED: 'bg-success/20 text-success',
		FAKE: 'bg-danger/20 text-danger',
		PENDING: 'bg-accent/20 text-accent',
	};

	return <span className={`px-3 py-1 text-xs rounded-full ${styles[status]}`}>{status}</span>;
};
