export const Button = ({ children, ...props }: any) => {
	return (
		<button
			className='
        bg-primary px-4 hover:bg-primary-hover w-fit place-items-center text-white cursor-pointer disabled:cursor-auto font-medium py-3 rounded-lg transition disabled:opacity-50
      '
			{...props}
		>
			{children}
		</button>
	);
};
