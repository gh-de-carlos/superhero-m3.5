"use strict"
const say = console.log;


say("%c🦹‍♀️", "font-size: 3rem")
const superheroe = {
  nombre: "voltman",
  edad: Math.round(Math.random() * 20) + 20,
  habilidades: ["Volar", "Invisibilidad", "Súper fuerza"],
  poderBase: 200,
  poderActual: 300,
  activo: true,
  saludo: function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

say(superheroe.saludo());
say(`Mis habilidades son: ${superheroe.habilidades.join(", ")}.`);
say(`Mi edad fue asignada aleatoriamente: ${superheroe.edad}`);
say(`Primer letra de mi nombre: ${superheroe.nombre.toUpperCase()[0]}`);
say(`Mayor nivel de energía ha sido: ${Math.max(superheroe.poderBase, superheroe.poderActual)}`);
say(`Nombre como objeto ${typeof superheroe.nombre === 'object'}`);
say(`Nombre como primitivo ${typeof superheroe.nombre === 'string'}`);
