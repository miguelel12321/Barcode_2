function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`);
    document.querySelector('.resultado').innerHTML = decodedText
    document.querySelector('.resultado').style.background = "transparent"
    document.querySelector('.resultado').style.background = "green"
    resultado.call()
}

function CodeInsert(){
    decodedText = document.querySelector('.code_manual').value
    console.log(`Code scanned = ${decodedText}`);
    document.querySelector('.resultado').innerHTML = decodedText
    document.querySelector('.resultado').style.background = "transparent"
    document.querySelector('.resultado').style.background = "green"
    resultado.call()
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 30, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

function resultado(){
    if (decodedText == '5601009986224'){
        document.querySelector('h3.final').innerHTML = c5601009986224[0]
        document.querySelector('h3.final2').innerHTML = c5601009986224[1]
        document.querySelector('h3.final3').innerHTML = c5601009986224[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c5601009986224[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pingodoce.pt/wp-content/uploads/products/large/868387-602a96c9657d1e6dfcc8c7b114b8e0f3.jpg')
    } else if(decodedText == '5600334469914') {
        document.querySelector('h3.final').innerHTML = c5600334469914[0]
        document.querySelector('h3.final2').innerHTML = c5600334469914[1]
        document.querySelector('h3.final3').innerHTML = c5600334469914[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c5600334469914[3]
        document.querySelector('img.final').setAttribute('src', 'https://brasilcosmeticos.pt/wp-content/uploads/2022/04/Luvas_vinil_rubber_gold_jorgegoncalves.jpg')
    }
}

var c5601009986224 = ['Guardanapos Folha Tripla', 'Pingo Docce', 3.60, '']
var c5600334469914 = ['Luvas Vinyl T. M', 'RUBBERGOLD', 3.60, 'Não sei']