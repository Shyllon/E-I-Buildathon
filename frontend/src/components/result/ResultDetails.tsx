export const ResultDetails = ({ result }: any) => {
	return (
		<div className='bg-surface border border-border rounded-xl p-4 w-full max-w-sm'>
			<div className='flex justify-between text-sm'>
				<span className='text-gray-400'>Amount</span>
				<span>₦{result.amount}</span>
			</div>

			<div className='flex justify-between text-sm mt-2'>
				<span className='text-gray-400'>Bank</span>
				<span>{result.bank_name}</span>
			</div>

			<div className='flex justify-between text-sm mt-2'>
				<span className='text-gray-400'>Reference</span>
				<span>{result.external_ref_id}</span>
			</div>

			<div className='flex justify-between text-sm mt-2'>
				<span className='text-gray-400'>Risk Score</span>
				<span>{result.risk_score}%</span>
			</div>
		</div>
	);
};
