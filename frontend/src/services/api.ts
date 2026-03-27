// 1. Pull the URL from your new .env file
const API_BASE_URL = import.meta.env.VITE_API_URL;

// 2. Define what a "Health" response looks like to stop the red lines
interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

export const getHealth = async (): Promise<HealthResponse> => {
  const res = await fetch(`${API_BASE_URL}`); // Hits https://.../api
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export const scanReceipt = async (formData: FormData) => {
  // 3. This hits https://.../api/transactions
  const res = await fetch(`${API_BASE_URL}/transactions`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to scan receipt");
  return res.json();
};