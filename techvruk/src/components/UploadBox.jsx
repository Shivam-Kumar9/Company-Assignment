export default function UploadBox({ setImage, setFileName }) {

  function handleUpload(e) {
    const file = e.target.files[0];
    console.log(e.target.files);
    if (!file) return;

    const url = URL.createObjectURL(file);
    
    setImage(url);
    setFileName(file.name);
  }

  return (
    <div className="uploadBox">

      <input
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleUpload}
      />

    </div>
  );
}