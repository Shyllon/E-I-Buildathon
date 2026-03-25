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
			<label
				htmlFor='image'
				className='border-2 border-dashed border-border rounded-xl p-20 text-center cursor-pointer hover:border-primary transition text-sm text-primary-text/70
      '
			>
				{!preview && 'Upload proof of payment'}
				{preview && (
					<div className='place-self-center'>
						<h3 className='place-content-start'>Preview:</h3>
						<img alt='uploaded preview' width='150px' src={preview} />
						<br />

						<div className='flex gap-3 items-center'>
							<Button className='place-self-start' onClick={() => (setSelectedImage(null), onFile(null))}>
								Change Image
							</Button>
							<Button className='place-self-start' onClick={() => (setSelectedImage(null), onFile(null))}>
								Remove Image
							</Button>
						</div>
					</div>
				)}
			</label>
			<div></div>
		</>
	);
};
