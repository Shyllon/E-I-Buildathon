export const ResultHeader = ({ result }: any) => {
	const isFake = result?.flags?.includes('ALERT_MISMATCH');
	const isRisk = result?.risk_score >= 60;

	let state = 'VERIFIED';
	if (isFake) state = 'FAKE';
	else if (isRisk) state = 'RISK';

	const config: Record<string, { text: string; color: string }> = {
		VERIFIED: {
			text: 'VERIFIED BY INTERSWITCH',
			color: 'text-success',
		},
		FAKE: {
			text: 'FAKE ALERT DETECTED',
			color: 'text-danger',
		},
		RISK: {
			text: 'CAUTION: POTENTIAL RISK',
			color: 'text-warning',
		},
	};

	return (
		<div className='text-center'>
			<h1 className={`text-xl font-heading font-semibold ${config[state].color}`}>{config[state].text}</h1>
		</div>
	);
};
