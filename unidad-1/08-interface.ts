interface citaCalendario{
    fechaHora: Date;
    titulo: string;
    lugar: string,
};

let citaUno: citaCalendario;
citaUno = {
    fechaHora: new Date (Date.now()),
    titulo: "Programando en typescript",
    lugar: "Mendoza"
};

console.log(citaUno);