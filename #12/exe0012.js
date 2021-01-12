var now = new Date()
var hora = now.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12 ){
    console.log (`Bom dia!`)
} else if (hora > 12 ){
    console.log(`Boa tarde!`)
} else if (hora >= 19){
    console.log(`Boa noite!`)
}