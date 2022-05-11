# sprint5
Nivel 1

- Ejercicio 1 :

En este primer ejercicio crearemos la pantalla principal que mostrará chistes al usuario.

El funcionamiento  debe ser el siguiente:

- Al entrar no mostrará ningún chiste. Aparecerá el título y el botón de siguiente chiste“

- Al pulsar el botón de “Siguiente chiste” se hará fetch en la API de chistes y se mostrará por consola el chiste en cuestión.



Nota: En este ejercicio no es necesario maquetar la web, primero haremos que funcione para pasar a aplicarle los estilos.

Tipo 1: usar promisas o async/await para esperar la respuesta de la API

Tipo 2: antes de usar una API en el código, es recomendable usar Postman o herramientas online para probar la API, por ejemplo " Talend API Tester ". Además de garantizar que funciona, verás el objeto que devuelve, para saber utilizarlo.

- Ejercicio 2:

Nuestra web ya obtiene los píulios del servidor y los mostramos por consola, falta mostrárselos al usuario.

Realizar una primera aproximación de la maquetación, colocando cada elemento en su sitio. No te preocupes por los detalles, modificaremos la maquetación más adelante.

El objetivo de este ejercicio es que el usuario pueda ir visualizando los chistes y pedir nuevos.

Una referencia de la colocación de los elementos es la siguiente:




- Ejercicio 3:

La empresa que encarga el proyecto necesita realizar un seguimiento al uso de esta web para su estudio.
Para ello, se necesita saber el nivel de aceptación de los chistes, un tracking para saber cuándo los empleados están de mejor humor, y cuántos chistes se consumen de media.

¿Cómo se traduce esta petición en nuestro código?

Necesitarás generar un array llamado reportAcudits, en el que iremos guardando toda la información relativa al chiste que nos pide el cliente.

Los tres campos que debe tener cada objeto del array son:

{

  joke: "...",

  resultado: 1,

  date: ...


}

- La fecha   de cuándo se hizo la valoración  deberás guardarla en formato ISO. Más información  aquí .


- El campo score tiene un rango del 1 al 3, siendo un 1 la peor puntuación. Tendrás que implementar 3 botones entre el chiste y el. botón para cargar el siguiente chiste, para que el usuario pueda puntuarlo. 

Con la puntuación del chiste, junto al chiste y generando una fecha, deberás ir cumplimentando el array reportJokes.

Cuando vayas actualizando este array, con mostrar por consola su contenido será suficiente

Nivel 2


- Ejercicio 4:

Bien hecho! Ya tienes una web de chistes operativa. Ya que está web está pensada para mostrar chistes a los usuarios a primera hora de la mañana para que empiecen bien el día, añadiremos información meteorológica ya que puede serles de utilidad. 

Consumir una API de información meteorológica y mostrarlo en la web. Esta API debe decirse en la apertura, no mediante un botón.

Nota: Todavía no es necesario maquetar la web, mostrando una palabra que indique el tiempo es suficiente.



- Ejercicio 5:

El cliente nos ha comunidado en las primeras pruebas, que los usuarios se aburrirán si siempre mostramos el mismo tipo de chistes.

Tienes que buscar otra API (o APIs) de chistes y utilizarla para alternar chistes de diferentes fuentes (bien alternando uno de cada o de forma aleatoria).



Ayuda:  Los chistes de Chuck Norris nunca fallan.

Nivel 3


- Ejercicio 6:

Maquetar la web de chistes y tiempo meteorológico conforme a la siguiente pantalla:




Tienes muchos generadores online de gradientes, formas, backgrounds... en este ejemplo se recomienda usar esta herramienta onlione para generar la base del contenedor de los chistes:

https://www.blobmaker.app/

Como habrás podido observar, en lugar de mostrar al usuario el texto del tiempo, lo traducimos en un icono y temperatura actual.


Ayuda: la forma base del contenedor de chistes implemtarla con svg.


Bonus: para mejorar la experiencia de usuario, puedes tener guardadas diversas formas del contenedor (svgs en una carpeta del proyecto), y cuando el usuario solicite un nuevo chiste, cambiar la clase css del contenedor y con ello cambiará la forma ( cargando otro svg ), siendo superdinámica y llamativa la web!
