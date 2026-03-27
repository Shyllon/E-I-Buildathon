import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UploadBox } from '../components/scanner/UploadBox';
import { Button } from '../components/ui/Button';
import { fileToBase64 } from '../helpers';

export const Scanner = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);
    const [amount, setAmount] = useState<number>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        if (!file || !amount) return;
        setLoading(true);

        try {
            const base64 = await fileToBase64(file);

            // FIX: Use the Environment Variable for the Railway Backend
            const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

            const res = await fetch(`${API_BASE_URL}/transactions/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image_base64: base64,
                    expected_amount: amount,
                }),
            });

            if (!res.ok) throw new Error(`Server Error: ${res.status}`);

            const data = await res.json();
            
            // Success: Send the result data to the result page
            navigate('/result', { state: data });
        } catch (err) {
            console.error("Connection Error:", err);
            alert("Could not connect to VendorGuard Engine. Please check if the backend is live.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='min-h-screen place-content-center pt-33 pb-20 px-20 '>
            <div className='flex justify-center flex-col gap-6'>
                <h1 className='text-lg font-heading text-start'>Upload Receipt</h1>

                <UploadBox onFile={setFile} />

                <div className='flex flex-col gap-2'>
                    <label htmlFor='amount' className='text-sm text-secondary-text'>
                        Expected Amount
                    </label>

                    <div className='flex items-center bg-surface border border-border rounded-lg px-4'>
                        <span className='text-secondary-text mr-2'>₦</span>
                        <input
                            type='number'
                            name='amount'
                            id='amount'
                            value={amount || ''}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder='0.00'
                            className='border-none bg-transparent px-0 w-full py-3 text-sm focus:outline-none'
                        />
                    </div>
                </div>

                <div className='flex items-center w-full justify-center'>
                    <Button
                        onClick={handleSubmit}
                        disabled={!file || !amount || loading}
                    >
                        {loading ? 'Processing...' : 'Scan Transaction'}
                    </Button>
                </div>
            </div>
        </section>
    );
};