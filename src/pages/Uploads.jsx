import FileUpload from '../components/FileUpload';

const Uploads = () => {
  const handleUploadComplete = (data) => {
    console.log('Upload completed:', data);
    // You could trigger a refresh of transactions here if needed
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Upload Files</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUpload 
          endpoint="/receipts/upload" 
          onUploadComplete={handleUploadComplete}
        />
        
        <FileUpload 
          endpoint="/receipts/upload-pdf" 
          onUploadComplete={handleUploadComplete}
        />
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Upload Instructions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use the left form to upload receipt images (JPG, PNG, etc.)</li>
          <li>Use the right form to upload PDF bank statements</li>
          <li>The system will automatically extract transaction data</li>
          <li>Extracted transactions will be added to your account</li>
        </ul>
      </div>
    </div>
  );
};

export default Uploads;