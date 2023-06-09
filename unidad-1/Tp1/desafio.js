"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Desarrolla una aplicación utilizando TypeScript que genere contraseñas seguras.
La aplicación debe seguir las siguientes pautas:

La aplicación debe generar una contraseña aleatoria de una longitud específica.
La contraseña debe incluir una combinación de letras mayúsculas, letras minúsculas, números y caracteres especiales.
La contraseña generada debe ser mostrada en la consola.
Ten en cuenta las siguientes consideraciones:

Puedes utilizar cualquier librería de generación de contraseñas aleatorias que esté disponible para TypeScript.
Asegúrate de que la aplicación sea fácil de usar y proporcione instrucciones claras al usuario.
Puedes incluir características adicionales en tu aplicación,
como permitir al usuario especificar el conjunto de caracteres permitidos en la contraseña. */
var generatePassword = require("generate-password");
var passwordOptions = {
    length: 14,
    number: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
};
var GeneradorContraseña = generatePassword.generate(passwordOptions);
console.log(GeneradorContraseña);
