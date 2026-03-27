import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UploadBox } from '../components/scanner/UploadBox';
import { Button } from '../components/ui/Button';
import { AmountInput } from '../components/scanner/AmountInput';
import { fileToBase64 } from '../helpers';
import { Input } from '../components/ui/Input';

export const Scanner = () => {
	const navigate = useNavigate();
	const [file, setFile] = useState<File | null>(null);
	const [amount, setAmount] = useState<number>();
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async () => {
    // Basic validation
    if (!file || !amount) return;
    
    setLoading(true);
    try {
        // Convert the image to base64 for the API
        const base64 = await fileToBase64(file);

        // Uses the dynamic Railway URL you set in Vercel
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

        const res = await fetch(`${API_URL}/transactions/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image_base64: base64,
                expected_amount: amount,
                // Pro Tip: We can add a timestamp or dummy ID here if the backend needs it
                request_id: `REQ-${Date.now()}` 
            }),
        });

        if (!res.ok) {
            throw new Error(`Server responded with ${res.status}`);
        }

        const data = await res.json();
        console.log("Backend Response:", data);

        // Navigate to the result page with the Fraud Data from the Analyst
        navigate('/result', { state: data });
        
    } catch (err) {
        console.error("Verification failed:", err);
        alert("Connection to VendorGuard Engine failed. Please check your internet.");
    } finally {
        setLoading(false);
    }
};
	return (
		<section className='min-h-screen place-content-center pt-33 pb-20 px-20 '>
			<div className='flex justify-center flex-col gap-6'>
				<h1 className='text-2xl font-bold font-heading text-start'>Upload Receipt</h1>

				<UploadBox onFile={setFile} />

				<div className='flex flex-col gap-2'>
					<label htmlFor='amount' className='text-sm text-secondary-text'>
						Expected Amount
					</label>

					<div className='flex items-center focus:outline-2 focus:outline-primary bg-surface border border-border rounded-lg px-4'>
						<span className='text-secondary-text mr-2'>₦</span>
						<input
							type='number'
							name='amount'
							id='amount'
							value={amount ? amount : ''}
							onChange={(e: any) => setAmount(Number(e.target.value))}
							placeholder='0.00'
							className='border-none bg-transparent px-0 w-full border border-border rounded-lg py-3 text-sm focus:outline-none '
						/>
					</div>
				</div>
				<div className='flex items-center w-full justify-center	'>
				<div className='flex items-center w-full justify-center '>
                    <Button
                        onClick={handleSubmit}
                        disabled={!file || !amount || loading}
                    >
                        {loading ? 'Processing...' : 'Scan Transaction'}
                    </Button>
                </div>			
				</div>
			</div>
		</section>
	);
};
