import { Input } from '../ui/Input';

export const AmountInput = ({ value, onChange }: any) => {
	return (
		<div className='flex flex-col gap-2'>
			<label className='text-sm text-secondary-text'>Expected Amount</label>

			<div className='flex items-center bg-surface border border-border rounded-lg px-3'>
				<span className='text-secondary-text mr-2'>₦</span>
				<Input
					type='number'
					value={value}
					onChange={(e: any) => onChange(Number(e.target.value))}
					placeholder='0.00'
					className='border-none focus:ring-0 bg-transparent px-0'
				/>
			</div>
		</div>
	);
};