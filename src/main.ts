import * as fflate from '/content/f815bd5c566c6e46de5cdb6ccb3a7043c63deeba61f4234baea84b602b0d4440i0'

const params = new URLSearchParams(window.location.search);

let fileUrl = params.get('j')  params.get('q')  '/content/c4c3e921da77f2a5bf7285e7e92d813ce5a5f6ecc2f4ffe99f8ad8191183a225i0';

fetch(fileUrl).then(async (res) => {
  const buf = await res.arrayBuffer();
  const decompressedContent = new TextDecoder().decode(fflate.decompressSync(new Uint8Array(buf)));

  if (params.get('j')) {
    // If the 'j' parameter is present, serve the decompressed content as a JavaScript file
    const blob = new Blob([decompressedContent], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  } else {
    // If the 'j' parameter is not present, write the decompressed content to the document
    document.write(decompressedContent);
    document.close();
  }
}).catch((err) => console.error(err));
