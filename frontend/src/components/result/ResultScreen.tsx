export const ResultScreen = ({ result }: { result: any }) => {
	const isFake = result.flags.includes('ALERT_MISMATCH');
	const isRisk = result.risk_score >= 60;

	let state = 'VERIFIED';
	if (isFake) state = 'FAKE';
	else if (isRisk) state = 'RISK';

	const styles: Record<string, string> = {
		VERIFIED: 'bg-success/10 text-success',
		FAKE: 'bg-danger/10 text-danger',
		RISK: 'bg-warning/10 text-warning',
	};

	const title: Record<string, string> = {
		VERIFIED: 'VERIFIED BY INTERSWITCH',
		FAKE: 'FAKE ALERT DETECTED',
		RISK: 'CAUTION',
	};

	return (
		<div
			className={`
      min-h-screen flex flex-col items-center justify-center
      px-4 text-center ${styles[state]}
    `}
		>
			<h1 className='text-xl font-heading font-semibold'>{title[state]}</h1>

			<div className='mt-6 bg-surface border border-border rounded-xl p-4 w-full max-w-sm'>
				<p>Amount: ₦{result.amount}</p>
				<p>Bank: {result.bank_name}</p>
				<p>Ref: {result.external_ref_id}</p>
				<p>Risk Score: {result.risk_score}</p>
			</div>
		</div>
	);
};
