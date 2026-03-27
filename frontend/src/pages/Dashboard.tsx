import { SummaryCard } from '../components/dashboard/SummaryCard';
import { TransactionTable } from '../components/dashboard/TransactionTable';

export const Dashboard = ({ data }: any) => {
	return (
		<div className='min-h-screen p-4 flex flex-col gap-6'>
			<h1 className='text-lg font-heading'>Dashboard</h1>

			<div className='grid grid-cols-3 gap-4'>
				<SummaryCard title='Verified' value='24' />
				<SummaryCard title='Fraud Blocked' value='6' />
				<SummaryCard title='Revenue Protected' value='₦120,000' />
			</div>

			<TransactionTable data={data} />
		</div>
	);
};
