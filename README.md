# <img src="favicon.png" style="width: 25px; border-radius: 50%;"> Módulo 3 - AE5 - "Perfil superhéroe" <img src="favicon.png" style="width: 25px; border-radius: 50%;">

<!-- ![mockup o entrega del ejercicio][0] -->

## 👉 REQUISITOS

Crea un programa donde se simule el archivo secreto de un superhéroe.

1. ✔️Crea un objeto llamado superheroe con las siguientes propiedades:
    * nombre (string)
    * edad (number)
    * habilidades (arreglo de strings)
    * activo (booleano)
    * saludo (método que imprima un mensaje personalizado)
2. ✔️Accede a sus propiedades usando notación de punto y notación de corchetes.
3. ✔️Usa el objeto Math para:
    * Calcular una edad aleatoria entre 20 y 40 años.
    * Redondear la edad al entero más cercano.
    * Obtener el valor máximo entre dos niveles de energía.
4. ✔️Usa el objeto String para:
    * Manipular el nombre (convertirlo a mayúsculas y extraer la primera letra).
    * Comparar la versión primitiva y la versión como objeto del nombre.
5. ✔️Resultado esperado en consola:

```Js
Hola, soy Voltman y tengo 33 años.
Mis habilidades son: Volar, Invisibilidad, Súper fuerza.
Mi edad fue asignada aleatoriamente: 33
Primera letra de mi nombre: V
¿ Nombre como objeto? true                  // mal planteado
¿ Nombre primitivo? true
```

## 👀 NOTAS

- Se han incorporado atributos `currentPower` y `maxPowerEver` para aplicar el método `Math.max()` como solicita la pauta en 3.3
- Se ha comparado el atributo `superheroe.nombre` que la pauta define explicitamente con una `string` en 1.1 con el tipo `object` y el resultado, como se espera para `typeof superheroe.nombre === 'object'` es falso.
- Se ha creado la propiedad `nombre` en minúscula para que usar `string.toUpperCase()` tenga sentido.

## 📁 ESTRUCTURA DEL PROYECTO
```
📁 esta-carpeta/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    ├── 📁img/  
    ├── 📁js/  
    │   └── main.js
    └── 📁utils/  
```

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/entrega.png
[2]:favicon.png
