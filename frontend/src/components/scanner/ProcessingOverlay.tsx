export const ProcessingOverlay = () => {
	return (
		<div
			className='
      fixed inset-0
      bg-bg/90
      flex flex-col items-center justify-center
      gap-4
    '
		>
			<div className='w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin' />
			<p className='text-sm text-gray-400'>Verifying with Interswitch...</p>
		</div>
	);
};
