export const SummaryCard = ({ title, value }: any) => {
	return (
		<div className='bg-surface border border-border rounded-xl p-4'>
			<p className='text-sm text-gray-400'>{title}</p>
			<h2 className='text-xl font-heading'>{value}</h2>
		</div>
	);
};
