function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`);
    document.querySelector('.resultado').innerHTML = decodedText
    document.querySelector('.resultado').style.background = "transparent"
    document.querySelector('.resultado').style.background = "green"
    resultado.apply()
}

function CodeInsert(){
    decodedText = document.querySelector('.code_manual').value
    console.log(`Code scanned = ${decodedText}`);
    document.querySelector('.resultado').innerHTML = decodedText
    document.querySelector('.resultado').style.background = "transparent"
    document.querySelector('.resultado').style.background = "green"
    resultado.apply()
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 30, qrbox: 350 });
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
    } else if(decodedText == '3474636730841') {
        document.querySelector('h3.final').innerHTML = c3474636730841[0]
        document.querySelector('h3.final2').innerHTML = c3474636730841[1]
        document.querySelector('h3.final3').innerHTML = c3474636730841[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636730841[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/180766_d949a-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/173/loreal-professionnel-serie-expert-absolut-repair-gold-serum-180766/')
    } else if(decodedText == '3474636505845') {
        document.querySelector('h3.final').innerHTML = c3474636505845[0]
        document.querySelector('h3.final2').innerHTML = c3474636505845[1]
        document.querySelector('h3.final3').innerHTML = c3474636505845[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636505845[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063464_609f8-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/197/loreal-professionnel-serie-expert-aminexil-ampolas-antiqueda-063464/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkuJsmF-OFi6D_8riJxIDm4d9mebHKG5QaszWUUCaP7Z6EOlQ5PdDGBoCLB0QAvD_BwE')
    } else if(decodedText == '3474636628889') {
        document.querySelector('h3.final').innerHTML = c3474636628889[0]
        document.querySelector('h3.final2').innerHTML = c3474636628889[1]
        document.querySelector('h3.final3').innerHTML = c3474636628889[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636628889[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063427_7b5df-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/129/l-39oreal-professional-serie-expert-blondifier-cool-21-champo-matizador-063427/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkjvnYDHpkyIFsHwnxBn46HWuLqr-HQFgkn8hXMW87TW4QaFKfvdFCRoCMXEQAvD_BwE')
    } else if(decodedText == '3474636505654') {
        document.querySelector('h3.final').innerHTML = c3474636505654[0]
        document.querySelector('h3.final2').innerHTML = c3474636505654[1]
        document.querySelector('h3.final3').innerHTML = c3474636505654[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636505654[3]
        document.querySelector('img.final').setAttribute('src', 'https://static.thcdn.com/images/large/webp/productimg/1600/1600/11568937-5464531001332083.jpg')
    } else if(decodedText == '3474636868483') {
        document.querySelector('h3.final').innerHTML = c3474636868483[0]
        document.querySelector('h3.final2').innerHTML = c3474636868483[1]
        document.querySelector('h3.final3').innerHTML = c3474636868483[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636868483[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063444_66d8f-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/250/loreal-professionnel-serie-expert-pro-longer-mascara-renovacao-063444/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkijhyyGweMAmO7RqgMhMmjjZ6IPLZQerGZAkdUm5GdTAssJk9b8_yBoCZ78QAvD_BwE')
    } else if(decodedText == '3474636868360') {
        document.querySelector('h3.final').innerHTML = c3474636868360[0]
        document.querySelector('h3.final2').innerHTML = c3474636868360[1]
        document.querySelector('h3.final3').innerHTML = c3474636868360[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636868360[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063438_8775b-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/249/loreal-professional-serie-expert-pro-longer-21-champo-renovacao-063438/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkqnqE6TzRr__vL-JQ_xcT2RoGuzsVDV20yP8R6_ndRARpFf4C-8fuBoCS7IQAvD_BwE')
    } else if(decodedText == '3474636807277') {
        document.querySelector('h3.final').innerHTML = c3474636807277[0]
        document.querySelector('h3.final2').innerHTML = c3474636807277[1]
        document.querySelector('h3.final3').innerHTML = c3474636807277[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636807277[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063395_f1f03-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/166/loreal-professionnel-serie-expert-vitamino-color-mascara-protecao-cor-063395/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEklzObXD6phFxh0bSeZErkOfVN1vNOmkjLkFlSUGsVUWt7oFSQXgQlxoCI20QAvD_BwE')
    } else if(decodedText == '3474636807222') {
        document.querySelector('h3.final').innerHTML = c3474636807222[0]
        document.querySelector('h3.final2').innerHTML = c3474636807222[1]
        document.querySelector('h3.final3').innerHTML = c3474636807222[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636807222[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063389_2c459-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/123/loreal-professionnel-serie-expert-vitamino-color-champo-protetor-da-cor-063389/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkhgwLQ0rzhnszqoa1NCqA_iqqG6WFCoXQq8vDpx6JPHh-QczzaIj0RoCUAgQAvD_BwE')
    } else if(decodedText == '3474636974252') {
        document.querySelector('h3.final').innerHTML = c3474636974252[0]
        document.querySelector('h3.final2').innerHTML = c3474636974252[1]
        document.querySelector('h3.final3').innerHTML = c3474636974252[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636974252[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063418_176e3-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/153/loreal-professionnel-serie-expert-absolut-repair-mascara-reparacao-063418/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkmCkOZxYfPCecbmwE6OscFj1l2GIiHZyYdSa-IqLWZCfV9l7ZFJdpRoCAGYQAvD_BwE')
    }else if(decodedText == '3474636974214') {
        document.querySelector('h3.final').innerHTML = c3474636974214[0]
        document.querySelector('h3.final2').innerHTML = c3474636974214[1]
        document.querySelector('h3.final3').innerHTML = c3474636974214[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c3474636974214[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/063412_661fd-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/124/loreal-professionnel-serie-expert-absolut-repair-champo-reparacao-063412/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkv_yjDvzUtWvTWV5Y4Oo94J0YY6znzvUT_9WRo1dPAa3NMbZo5DnRhoC6bYQAvD_BwE')
    }else if(decodedText == '26100104') {
        document.querySelector('h3.final').innerHTML = c26100104[0]
        document.querySelector('h3.final2').innerHTML = c26100104[1]
        document.querySelector('h3.final3').innerHTML = c26100104[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c26100104[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/110976_e1365-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/85/algodao-em-corda-110976/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEksf4qJeS4podO3AA4FvFG4JDbxp2yAdyFjdEE7TpdVHd4lFX-PcelxoCekwQAvD_BwE')
    }else if(decodedText == '52622249') {
        document.querySelector('h3.final').innerHTML = c52622249[0]
        document.querySelector('h3.final2').innerHTML = c52622249[1]
        document.querySelector('h3.final3').innerHTML = c52622249[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c52622249[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/114857_b9cb8-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/49/pollie-alicate-cuticulas-10-cm-114857/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEklut1Rt6y7M6EpOT7Gk-WQZ4QdfFNAuqUoMUBBYA6UeGVoUR__BJIxoC9YUQAvD_BwE')
    }else if(decodedText == '8032986125240') {
        document.querySelector('h3.final').innerHTML = c8032986125240[0]
        document.querySelector('h3.final2').innerHTML = c8032986125240[1]
        document.querySelector('h3.final3').innerHTML = c8032986125240[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c8032986125240[3]
        document.querySelector('img.final').setAttribute('src', 'https://app.genesiscosmeticos.pt/storage/b62754b8f6ca755b7bc7b117cb98bd83.png')
    }else if(decodedText == '52022226') {
        document.querySelector('h3.final').innerHTML = c52022226[0]
        document.querySelector('h3.final2').innerHTML = c52022226[1]
        document.querySelector('h3.final3').innerHTML = c52022226[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c52022226[3]
        document.querySelector('img.final').setAttribute('src', 'https://rickiparodi.com/rickiparodi/imgrp/products/52022226.jpg')
    }else if(decodedText == '24125013') {
        document.querySelector('h3.final').innerHTML = c24125013[0]
        document.querySelector('h3.final2').innerHTML = c24125013[1]
        document.querySelector('h3.final3').innerHTML = c24125013[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c24125013[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/122787-thickbox_default/rolo-em-prata-aluminio-125m-x-20cm.jpg')
        document.querySelector('h3.final2').style.color = 'red'
    }else if(decodedText == '24150029') {
        document.querySelector('h3.final').innerHTML = c24150029[0]
        document.querySelector('h3.final2').innerHTML = c24150029[1]
        document.querySelector('h3.final3').innerHTML = c24150029[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c24150029[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/122786-thickbox_default/aluminio-rolo-prata-150x29cm.jpg')
        document.querySelector('h3.final2').style.color = 'red'
    }else if(decodedText == '5600916500493') {
        document.querySelector('h3.final').innerHTML = c5600916500493[0]
        document.querySelector('h3.final2').innerHTML = c5600916500493[1]
        document.querySelector('h3.final3').innerHTML = c5600916500493[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c5600916500493[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/106112-thickbox_default/ativador-de-caracois-s-agua-200ml-tendence.jpg')
        document.querySelector('a.final').setAttribute('href', 'https://presencadeluxo.pt/styling/11513-ativador-de-caracois-s-agua-200ml-tendence.html?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkkPCq9JZp1DOvddYSVylYMTR0VpEgNYsfBJlkWv3LGJSSJeyUsxzmxoCZgUQAvD_BwE')
    }else if(decodedText == '8435054645396') {
        document.querySelector('h3.final').innerHTML = c8435054645396[0]
        document.querySelector('h3.final2').innerHTML = c8435054645396[1]
        document.querySelector('h3.final3').innerHTML = c8435054645396[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c8435054645396[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/31272-thickbox_default/armony-cleanser-gel-de-limpeza-levissime-250ml.jpg')
        document.querySelector('a.final').setAttribute('href', 'https://presencadeluxo.pt/pele-oleosa/10021-armony-cleanser-gel-de-limpeza-levissime-250ml.html?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkqSEGF64UQ0dkgKcuTc_rGhl6hESlGrJkJCNeANnOBi8JWs8Ks0gWBoCXgoQAvD_BwE')
    }else if(decodedText == '8435054645457') {
        document.querySelector('h3.final').innerHTML = c8435054645457[0]
        document.querySelector('h3.final2').innerHTML = c8435054645457[1]
        document.querySelector('h3.final3').innerHTML = c8435054645457[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c8435054645457[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/126946-thickbox_default/armony-stick-corrector-de-borbulhas-levissime-30ml.jpg')
        document.querySelector('a.final').setAttribute('href', 'https://presencadeluxo.pt/estetica/10027-armony-stick-corrector-de-borbulhas-levissime-30ml.html?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkp3P-Q99D0AqVoKAPn8Bk0VoqOTZLHbRE8Ctxjx7VrNM1BRHoX_nbBoCtvEQAvD_BwE')
    }else if(decodedText == '8435054645402') {
        document.querySelector('h3.final').innerHTML = c8435054645402[0]
        document.querySelector('h3.final2').innerHTML = c8435054645402[1]
        document.querySelector('h3.final3').innerHTML = c8435054645402[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c8435054645402[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/31272-thickbox_default/armony-cleanser-gel-de-limpeza-levissime-250ml.jpg')
        document.querySelector('a.final').setAttribute('href', 'https://presencadeluxo.pt/pele-oleosa/10021-armony-cleanser-gel-de-limpeza-levissime-250ml.html?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkgOHASVjQ5qjT-yYR7ecZaEgq4v1kbOj8A6_IpAL-1lbn7nLcEfXDRoCr1AQAvD_BwE')
    }else if(decodedText == '30000003') {
        document.querySelector('h3.final').innerHTML = c30000003[0]
        document.querySelector('h3.final2').innerHTML = c30000003[1]
        document.querySelector('h3.final3').innerHTML = c30000003[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c30000003[3]
        document.querySelector('img.final').setAttribute('src', 'https://rickiparodi.com/rickiparodi/imgrp/products/30000003.jpg')
    }else if(decodedText == '8435054648670') {
        document.querySelector('h3.final').innerHTML = c8435054648670[0]
        document.querySelector('h3.final2').innerHTML = c8435054648670[1]
        document.querySelector('h3.final3').innerHTML = c8435054648670[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c8435054648670[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/93237-thickbox_default/balsamo-contorno-olhos-levissime-15ml.jpg')
        document.querySelector('a.final').setAttribute('href', 'https://presencadeluxo.pt/creme-de-olhos/10030-balsamo-contorno-olhos-levissime-15ml.html?gclid=CjwKCAjwq5-WBhB7EiwAl-HEkjKG62DunZH4ogUfWlmsFWJ5uLvcI0-lf7GrUqLKRN5RES2c-SlhcxoCeqAQAvD_BwE')
    }else if(decodedText == '55000539') {
        document.querySelector('h3.final').innerHTML = c55000539[0]
        document.querySelector('h3.final2').innerHTML = c55000539[1]
        document.querySelector('h3.final3').innerHTML = c55000539[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c55000539[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/34474-thickbox_default/tiras-depilacao-7x20cm-cx-100un.jpg')
        document.querySelector('h3.final2').style.color = 'yellow'
    }else if(decodedText == '8423029031589') {
        document.querySelector('h3.final').innerHTML = c8423029031589[0]
        document.querySelector('h3.final2').innerHTML = c8423029031589[1]
        document.querySelector('h3.final3').innerHTML = c8423029031589[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c8423029031589[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/113836_07f09-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/85/caixa-de-tiras-especial-madeixas-113836/?gclid=CjwKCAjwq5-WBhB7EiwAl-HEknVM-uXbmWQBYCzExgkVGO-2MRU0kKzyp7eSYPRAVpGdvjrYpUr3ZhoCyH4QAvD_BwE')
    }else if(decodedText == '5600482302125') {
        document.querySelector('h3.final').innerHTML = c5600482302125[0]
        document.querySelector('h3.final2').innerHTML = c5600482302125[1]
        document.querySelector('h3.final3').innerHTML = c5600482302125[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c5600482302125[3]
        document.querySelector('img.final').setAttribute('src', 'https://presencadeluxo.pt/127823-thickbox_default/base-dupla-com-termostato-prowax2-ricki-parodi.jpg')
        document.querySelector('a.final').setAttribute('href', 'https://presencadeluxo.pt/aquecedor-de-cera-roll-on/11296-base-dupla-com-termostato-prowax2-ricki-parodi-5600482302125.html?gclid=CjwKCAjwq5-WBhB7EiwAl-HEktjysj_KcqJroUawDqUKh1dMC01w4-MHbrVB1F1FhtNuZNDqUFFMtxoCnwEQAvD_BwE')
    }else if(decodedText == '4045787184846') {
        document.querySelector('h3.final').innerHTML = c4045787184846[0]
        document.querySelector('h3.final2').innerHTML = c4045787184846[1]
        document.querySelector('h3.final3').innerHTML = c4045787184846[2]
        document.querySelector('h3.final4').innerHTML = c4045787184846[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/bc-bonacure-color-freeze-spray-condicionador-200ml_6ca03-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/223/schwarzkopf-professional-bc-bonacure-color-freeze-ph45-spray-condicionador-063711/')
        document.querySelector('h3.final3').style.color = 'red'
    }else if(decodedText == '4045787429534') {
        document.querySelector('h3.final').innerHTML = c4045787429534[0]
        document.querySelector('h3.final2').innerHTML = c4045787429534[1]
        document.querySelector('h3.final3').innerHTML = c4045787429534[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c4045787429534[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/bc-bonacure-moisture-kick-mask-200_c514d-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/155/schwarzkopf-professional-bc-bonacure-moisture-kick-glicerol-mascara-063690/')
    }else if(decodedText == '4045787429138') {
        document.querySelector('h3.final').innerHTML = c4045787429138[0]
        document.querySelector('h3.final2').innerHTML = c4045787429138[1]
        document.querySelector('h3.final3').innerHTML = c4045787429138[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c4045787429138[3]
        document.querySelector('img.final').setAttribute('src', 'https://www.pluricosmetica.com/media/produtos/cache/bc-bonacure-moisture-kick-shampoo-250_a1310-500_500.webp')
        document.querySelector('a.final').setAttribute('href', 'https://www.pluricosmetica.com/catalog/122/schwarzkopf-professional-bc-bonacure-moisture-kick-glicerol-champo-063683/')
    }else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    } else if(decodedText == '') {
        document.querySelector('h3.final').innerHTML = c[0]
        document.querySelector('h3.final2').innerHTML = c[1]
        document.querySelector('h3.final3').innerHTML = c[2].toFixed(2) + '€'
        document.querySelector('h3.final4').innerHTML = c[3]
        document.querySelector('img.final').setAttribute('src', '')
        document.querySelector('a.final').setAttribute('href', '')
    }
}

var c5601009986224 = ['Guardanapos Folha Tripla', 'Pingo Docce', 3.60, '']
var c5600334469914 = ['Luvas Vinyl T. M', 'RUBBERGOLD', 3.60, 'Não sei']
var c3474636730841 = ['2SE ABSOLUT GOLD SERUM 50ML', 'L`Óreal', 12.00, '2987800-CN']
var c3474636505845 = ['2SE AMPOLAS AMINEXIL ADVANCED 10X6ML QUEDA', 'L`Óreal',  40.00, '2362500-CN']
var c3474636628889 = ['2SE BLONDIFIER SHAMPO COOL 300ML LOURO FRIO', 'L`Óreal', 9.50, '2741101-CN']
var c3474636505654 = ['2SE DENSITY SHAMPO 300ML QUEDA', 'L`Óreal', 11.50, '2360400-CN']
var c3474636868483 = ['2SE PRO LONGER MÁSCARA 250ML ', 'L`Óreal', 15.00, '3278500-CN']
var c3474636868360 = ['2SE PRO LONGER SHAMPO 300ML ', 'L`Óreal', 9.50, '3277300-CN']
var c3474636807277 = ['2SE VITAMINO COLOR MÁSCARA 250ML', 'L`Óreal', 15.00, '3083100-CN']
var c3474636807222 = ['2SE VITAMINO COLOR SHAMPO 300ML', 'L`Óreal', 9.50, '3082700-CN']
var c3474636974252 = ['3SE ABSOLUT MÁSCARA 250ML', 'L`Óreal', 20.25, '3557700-CN']
var c3474636974214 = ['3SE ABSOLUT SHAMPO 300ML', 'L`Óreal', 12.50, '3547400-CN']
var c26100104 = ['ALGODÃO EM CORDA RICKIPARODI PREMIUM 500 GR', 'Rickiparodi', 7.47, '26100104-RP']
var c52622249 = ['ALICATE CUTÍCULAS RICKIPARODI INOX 10CM - 4MM/6MM/8MM', 'Rickiparodi', 8.25, '52422249-RP']
var c8032986125240 = ['ALICATE UNHAS BURAFFALDI AÇO 12 CM', 'BURAFFALDI', 10.15, '36000760-RP']
var c52022226 = ['ALICATE UNHAS RICKIPARODI INOX 10 CM', 'Rickiparodi', 9.25, '52022226-RP']
var c24125013 = ['ALUMÍNIO EM ROLO PARA MADEIXAS PRATA 13 CM - 125 M', '-- INFORMAÇÃO INDISPONÍVEL -- NO DATA --', 8.20, '24125013-RP']
var c24150029 = ['ALUMÍNIO EM ROLO PARA MADEIXAS PRATA 29 CM - 150 M', '-- INFORMAÇÃO INDISPONÍVEL -- NO DATA --', 17.00, '24150029-RP']
var c5600916500493 = ['ANTENDENCE STYLING ACTIVADOR CARACÓIS S/ÁGUA 200ML', 'CNTendence', 13.00, 'TDG081-CN']
var c8435054645396 = ['ARMONY CLEANSER GEL  LIMPEZA PELE OLEOSA 250ML LS', 'LevisSime', 10.50, '1134539-CN']
var c8435054645457 = ['ARMONY STICK CORRECTOR DE BORBULHAR 30ML LS', 'LevisSime', 5.00, '1134545-CN']
var c8435054645402 = ['ARMONY TÓNICO LIMPEZA PELE OLEOSA 250ML LS', 'LevisSime', 8.50, '1134540-CN']
var c30000003 = ['AROS PROTEÇÃO CERA RICKIPARODI 16 CM 25 UNIDADES', 'Rickiparodi', 2.95, '30000003-RP']
var c8435054648670 = ['BÁLSAMO CONTORNO OLHOS ANTI IDADE 150ML LS', 'LevisSime', 13.85, '1135878-CN']
//Ver  GB que marca é!!!! ««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««
var c55000539 = ['BANDAS DEPILAÇÃO LISAS PACK.100UN 80GRS 7X20CM GB', '-Informação atualmente em análise-', 3.00, '130256302-CN']
var c8423029031589 = ['BANDAS TÉRMICAS PARA MADEIXAS 30X100CM 100 UNIDADES', 'Euro Still', 8.45, '40003338-RP']
var c5600482302125 = ['BASE COM DUAS DEPILADORAS RICKIPARODI PROWAX 2 COM TERMOSTATO', 'Rickiparodi', 29.50, '45800112-RP']
var c4045787184846 = ['BC COLOR SPRAY CONDICIONADOR 200ML**', 'Schwarzcopf (Bonacure)', '-- INFORMAÇÃO INDISPONÍVEL -- NO DATA --', '725777-CN']
var c4045787429534 = ['BONAC HMK MÁCARA MOISTURE 200ML', '', 17.50, '2326764-CN']
var c4045787429138 = ['BONAC HMK SHAMPO MOISTURE 250ML', '', 10.50, '2326783-CN']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
var c = ['', '', , '']
