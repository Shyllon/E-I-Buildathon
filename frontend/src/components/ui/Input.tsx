export const Input = ({ ...props }) => {
	return (
		<input
			className='
        w-full
        bg-surface
        border border-border
        rounded-lg
        px-4 py-3
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-primary
      '
			{...props}
		/>
	);
};
