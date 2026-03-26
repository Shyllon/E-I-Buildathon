export const Footer = () => {
	const date = new Date();
	return (
		<div className='bg-surface border-primary/30 border-t text-sm text-accent'>
			<div className='mx-auto place-content-center px-6 py-4'>
				<p className='text-left'>&copy; {date.getFullYear()} VendorGuard. All rights reserved.</p>
			</div>
		</div>
	);
};
