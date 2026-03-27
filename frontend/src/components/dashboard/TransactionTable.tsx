import { StatusBadge } from '../ui/StatusBadge';

export const TransactionTable = ({ data }: any) => {
	return (
		<div className='bg-surface border border-border rounded-xl overflow-hidden'>
			<table className='w-full text-sm'>
				<thead className='bg-bg'>
					<tr className='text-left text-gray-400'>
						<th className='p-3'>ID</th>
						<th>Status</th>
						<th>Risk</th>
					</tr>
				</thead>
				<tbody>
					{data.map((tx: any) => (
						<tr key={tx.transaction_id} className='border-t border-border'>
							<td className='p-3'>{tx.transaction_id}</td>
							<td>
								<StatusBadge status={tx.verification_status} />
							</td>
							<td>{tx.risk_score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
