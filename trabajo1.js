const usuario = {
    Id: {
        demand: true,
        alias: 'i'
    },

    Nombre: {
        demand: true,
        alias: 'n'
    },

    Cedula: {
        demand: true,
        alias: 'c'
    }
}

const fs = require('fs');
const argv = require('yargs')
           .command('inscribir','matriculado',usuario)
           .argv

var colors = require('colors');

let cursos = [{
    Id: 02,
    nombreCurso: 'Ingles IV',
    Duracion: '32 Horas',
    Costo: 40000
},
{
    Id: 03,
    nombreCurso: 'Matematicas V',
    Duracion: '40 Horas',
    Costo: 50000

},
{
    Id: 04,
    nombreCurso: 'Dibujo',
    Duracion: '10 Horas',
    Costo: 20000
}];

function mostrar(){
    for (let i=0;i<=2;i++){
        setTimeout(() => { mostrar(i)}, (2000*(i+1)));
    }
    
    let mostrar = (a) =>{
        console.log(' El curso de ' + cursos[a].nombreCurso.rainbow + ' tiene una duracion de ' + cursos[a].Duracion.rainbow + ', con un costo de ' + cursos[a].Costo.rainbow);
    };
}

let generarTexto = () => {
    texto = 'Curso Matriculado: ' + cursos[argv.Id-1].nombreCurso + '\n' +
            'Duracion: ' + cursos[argv.Id-1].nombreCurso + '\n' +
            'Nombre: ' + argv.Nombre + '\n' +
            'Cedula: ' + argv.Cedula + '\n' ;

    fs.writeFile('MostrarDatos.txt', texto,(err)=>{
        if (err) throw (err);
        console.log('!Matricula realizada!')
    });
}


if (argv.Id == undefined){
    mostrar();
}else if(argv.Id != 02 && argv.Id != 03 && argv.Id != 04 ){
    console.log('El id es erroneo');
    mostrar();
}else{
    generarTexto();
}

