class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){console.log(`El nombre es ${this.nombre} ${this.apellido}`)};
    addMascota(mascota){this.mascotas.push(mascota);}
    countMascotas(){console.log(this.mascotas.length);}
    addBook(nombre,autor){this.libros.push({nombre:nombre,autor:autor});}
    getBookNames(){console.log(this.libros.map((libro) =>libro.nombre))}}
    

const obj = new Usuario ('enrique','frutos')
    obj.getFullName();
    obj.addMascota('lucas');
    obj.addMascota('lucas');
    obj.countMascotas()
    obj.addBook('pepe','juan')
    obj.getBookNames()
