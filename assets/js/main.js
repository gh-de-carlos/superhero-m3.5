"use strict"
const say = console.log;

const superheroe = {
  nombre: "voltman",
  edad: Math.floor(Math.random() * 21) + 20,
  habilidades: ["Volar", "Invisibilidad", "Súper fuerza"],
  currentPower: 200,
  maxPowerEver: 300,
  activo: true,
  saludo: function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

say(superheroe.saludo());
say(`Mis habilidades son: ${superheroe.habilidades.join(", ")}.`);
say(`Mi edad fue asignada aleatoriamente: ${superheroe.edad}`);
say(`Primer letra de mi nombre: ${superheroe.nombre.toUpperCase()[0]}`);
say(`Mayor nivel de energía ha sido: ${Math.max(superheroe.currentPower, superheroe.maxPowerEver)}`);
say(`Nombre como objeto ${typeof superheroe.nombre === 'object'}`);
say(`Nombre como primitivo ${typeof superheroe.nombre === 'string'}`);
