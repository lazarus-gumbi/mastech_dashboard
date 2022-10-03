import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["CSV"];

export default function CSV_upload() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="file_up">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <div className="uploaded_files">
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> <button>Upload</button></div>
    </div>
  );
}
