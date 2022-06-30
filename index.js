function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    document.querySelector('.resultado').innerHTML = decodedText
    document.querySelector('.resultado').style.background = "transparent"
    document.querySelector('.resultado').style.background = "green"
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 30, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);