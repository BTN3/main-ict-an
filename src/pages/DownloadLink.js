// import React from 'react';

// const DownloadLink = ({ fileData, fileName }) => {
//   const handleClick = () => {
//     const blob = new Blob([fileData], { type: 'application/octet-stream' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', fileName);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={handleClick}>
//       Download File
//     </button>
//   );
// };

// export default DownloadLink;
// 
const DownloadLink = ({ fileData, fileName }) => {
  const downloadFile = () => {
    // Pretvaranje Buffera u Uint8Array
    const byteArray = new Uint8Array(fileData.data);

    // Stvaranje Bloba iz Uint8Array
    const fileBlob = new Blob([byteArray], { type: 'application/octet-stream' });

    // Kreiranje linka za preuzimanje
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(fileBlob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadFile}>
      Download {fileName}
    </button>
  );
};

export default DownloadLink;
