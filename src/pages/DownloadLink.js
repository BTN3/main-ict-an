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
// const DownloadLink = ({ fileData, fileName }) => {
//   const downloadFile = () => {
//     // Pretvaranje Buffera u Uint8Array
//     const byteArray = new Uint8Array(fileData.data);

//     // Stvaranje Bloba iz Uint8Array
//     const fileBlob = new Blob([byteArray], { type: 'application/octet-stream' });

//     // Kreiranje linka za preuzimanje
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(fileBlob);
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={downloadFile}>
//       Download {fileName}
//     </button>
//   );
// };

// export default DownloadLink;
// import React from 'react';

// const DownloadLink = ({ fileData, fileName }) => {
//   const downloadFile = () => {
//     // Create a Blob from the base64 string
//     const byteCharacters = atob(fileData);
//     const byteNumbers = new Array(byteCharacters.length);
//     for (let i = 0; i < byteCharacters.length; i++) {
//       byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     const fileBlob = new Blob([byteArray]);

//     // Create a link element and trigger the download
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(fileBlob);
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={downloadFile}>
//       Download {fileName}
//     </button>
//   );
// };

// export default DownloadLink;
// import React from 'react';

// const DownloadLink = ({ fileData, fileName }) => {
//   const downloadFile = () => {
//     const byteArray = new Uint8Array(fileData); // Pretvaranje Buffera u Uint8Array

//     const fileBlob = new Blob([byteArray], { type: 'application/octet-stream' }); // Stvaranje Bloba iz Uint8Array

//     const link = document.createElement('a'); // Kreiranje linka za preuzimanje
//     link.href = window.URL.createObjectURL(fileBlob);
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={downloadFile}>
//       Download {fileName}
//     </button>
//   );
// };

// export default DownloadLink;
// const DownloadLink = ({ fileData, fileName }) => {
//   const downloadFile = () => {
//     if (!fileData) {
//       console.error('File data is undefined or empty.');
//       return;
//     }

//     const byteArray = new Uint8Array(fileData);
//     const fileBlob = new Blob([byteArray], { type: 'application/octet-stream' });

//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(fileBlob);
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <button onClick={downloadFile}>
//       Download {fileName}
//     </button>
//   );
// };

// export default DownloadLink;
const DownloadLink = ({ fileData, fileName }) => {
  const downloadFile = () => {
    if (!fileData) {
      console.error('File data is undefined or empty.');
      return;
    }

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
