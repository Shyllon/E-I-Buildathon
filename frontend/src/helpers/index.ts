export const fileToBase64 = async (file: File): Promise<string> => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	const data: string = await new Promise((resolve, reject) => {
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = error => reject(error);
	});
	return data;
	// return new Promise((resolve, reject) => {
	// 	reader.onload = () => {
	// 		resolve(reader.result as string);
	// 	};
	// 	reader.onerror = error => reject(error);
	// });
};
