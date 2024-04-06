
function generateBlob(path){ 
    fetch(path)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onload = function() {
                const base64String = reader.result.split(',')[1];
                openBlob(base64String);
            };
            reader.readAsDataURL(blob);
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}
    
function openBlob(b64Data){
    
    const contentType = "application/pdf";
    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });

    window.open(URL.createObjectURL(blob), '_blank');
    
}
    