document.getElementById('calcular').addEventListener('click', function () {
    const adultos = parseInt(document.getElementById('adultos').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneAdulto = parseFloat(document.getElementById('carne-adulto').value) || 0;
    const carneCrianca = parseFloat(document.getElementById('carne-crianca').value) || 0;
    const frangoAdulto = parseFloat(document.getElementById('frango-adulto').value) || 0;
    const frangoCrianca = parseFloat(document.getElementById('frango-crianca').value) || 0;
    const linguicaAdulto = parseFloat(document.getElementById('linguica-adulto').value) || 0;
    const linguicaCrianca = parseFloat(document.getElementById('linguica-crianca').value) || 0;
    const refrigeranteAdulto = parseFloat(document.getElementById('refrigerante-adulto').value) || 0;
    const refrigeranteCrianca = parseFloat(document.getElementById('refrigerante-crianca').value) || 0;
    const paoAdulto = parseFloat(document.getElementById('pao-adulto').value) || 0;
    const paoCrianca = parseFloat(document.getElementById('pao-crianca').value) || 0;
    const cervejaAdulto = parseFloat(document.getElementById('cerveja-adulto').value) || 0;

    const totalCarne = (carneAdulto * adultos) + (carneCrianca * criancas);
    const totalFrango = (frangoAdulto * adultos) + (frangoCrianca * criancas);
    const totalLinguica = (linguicaAdulto * adultos) + (linguicaCrianca * criancas);
    const totalRefrigerante = (refrigeranteAdulto * adultos) + (refrigeranteCrianca * criancas);
    const totalPao = (paoAdulto * adultos) + (paoCrianca * criancas);
    const totalCerveja = cervejaAdulto * adultos;

    const resposta = `
    <p><strong>Quantidade necessária:</strong></p>
    ${totalCarne ? `<p>- ${totalCarne.toFixed(1).replace('.',',')} Kg de Carne Bovina</p>` : ''}
    ${totalFrango ? `<p>- ${totalFrango.toFixed(1).replace('.',',')} Kg de Frango</p>` : ''}
    ${totalLinguica ? `<p>- ${totalLinguica.toFixed(1).replace('.',',')} Kg de Linguiça</p>` : ''}
    ${totalRefrigerante ? `<p>- ${totalRefrigerante.toFixed(1).replace('.',',')} litros de Refrigerante</p>` : ''}
    ${totalPao ? `<p>- ${totalPao.toFixed(1).replace('.',',')} Kg de Pão de Alho</p>` : ''}
    ${totalCerveja ? `<p>- ${totalCerveja.toFixed(1).replace('.',',')} litros de Cerveja</p>` : ''}
    `;

    document.getElementById('resposta').innerHTML = resposta;
});