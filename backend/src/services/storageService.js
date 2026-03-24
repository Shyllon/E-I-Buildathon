import { supabase } from '../config/supabase.js';

/**
 * Uploads a receipt image to Supabase Storage
 */
export const uploadReceiptImage = async (fileBuffer, fileName, mimeType) => {
  try {
    // 1. Create a unique path (timestamp + original name)
    const fileExt = fileName.split('.').pop();
    const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`;
    const filePath = `receipts/${uniqueName}`;

    // 2. Upload to the 'receipts' bucket
    const { data, error } = await supabase.storage
      .from('receipts')
      .upload(filePath, fileBuffer, {
        contentType: mimeType,
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // 3. Get the Public URL
    const { data: { publicUrl } } = supabase.storage
      .from('receipts')
      .getPublicUrl(filePath);

    return { 
      success: true, 
      url: publicUrl, 
      path: filePath 
    };

  } catch (error) {
    console.error("Storage Upload Error:", error.message);
    return { success: false, error: error.message };
  }
};