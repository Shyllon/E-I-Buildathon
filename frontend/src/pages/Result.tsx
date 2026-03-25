import { useNavigate, useLocation } from 'react-router';
import { ResultHeader } from '../components/result/ResultHeader';
import { ResultDetails } from '../components/result/ResultDetails';
import { Button } from '../components/ui/Button';

export const Result = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	if (!state) {
		return <p className='p-4'>No result found</p>;
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-center gap-6 px-4'>
			<ResultHeader result={state} />
			<ResultDetails result={state} />

			<Button onClick={() => navigate('/scanner')}>Scan Another</Button>
		</div>
	);
};
