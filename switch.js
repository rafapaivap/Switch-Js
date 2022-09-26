let cod = prompt(
    'Insira o código de numeração conforme número de passageiros:'+
    '\n || vôo H70924 || (CHG-BSB) || Azul Linhas Aéreas Inteligentes' +
    '\nAté 74 passageiros - Código a01' +
    '\nEntre 75 a 144 passageiros - Código b02' +
    '\nEntre 145 a 165 passageiros - Código c03' +
    '\nEntre 165 a 220 passageiros - Código d04' +
    '\nEntre 220 a 298 passageiros - Código e05' 
)

switch (cod) {
    case 'a01':
        alert('Aeronave solicitada: ATR-72')
        break
    case 'b02':
        alert('Aeronave solicitada: Embrear E-195 E2')
        break
    case 'c03':
        alert('Aeronave solicitada: Airbus A320 Neo')
        break
    case 'd04':
        alert('Aeronave solicitada: Airbus A321')
        break
    case 'e05':
        alert('Aeronave solicitada: Airbus A330-900 Neo')
        break
    default:
        alert(`Código inválido.`)
}