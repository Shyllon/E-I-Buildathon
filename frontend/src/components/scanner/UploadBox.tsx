import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export const UploadBox = ({ onFile }: { onFile: (file: File | null) => void }) => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);

	const handleImageChange = (event: any) => {
		const file = event.target.files?.[0];
		if (file) {
			setSelectedImage(file);
			onFile(file);
		}
	};

	useEffect(() => {
		if (!selectedImage) {
			setPreview(null);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedImage);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedImage]);

	return (
		<>
			<input
				type='file'
				name='image'
				id='image'
				accept='image/*'
				onChange={handleImageChange}
				className='size-[0.1px] opacity-0 overflow-hidden absolute -z-1'
			/>
			{!preview && (
				<label
					htmlFor='image'
					className=' border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary transition cursor-pointer text-sm text-gray-400'
				>
					Upload proof of payment
				</label>
			)}
			{preview && (
				<div className='border-2 border-dashed border-border rounded-xl p-6  text-center hover:border-primary transition'>
					<div className='place-self-center '>
						<img alt='uploaded preview' className='place-self-center' width={'250px'} src={preview} />
						<br />
						<div className='flex items-center gap-4'>
							<label
								htmlFor='image'
								className='bg-primary px-4 hover:bg-primary-hover w-fit place-items-center cursor-pointer disabled:cursor-auto font-medium py-3 rounded-lg transition disabled:opacity-50 m text-primary-text'
							>
								Change Image
							</label>

							<Button onClick={() => (setSelectedImage(null), onFile(null))}>Remove Image</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
