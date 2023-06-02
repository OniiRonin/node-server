# Sistema básico de gestión de tareas

Este es un proyecto que implementa un sistema básico de gestión de tareas utilizando Node.js y readline para interactuar con el usuario a través de la línea de comandos.

## Uso del async/await y el método then()

1. **¿Qué sucedió al usar async y await?**

Al utilizar `async` y `await`, podemos escribir código asíncrono de una manera más sincrónica y fácil de leer. Con `async`, podemos marcar una función como asíncrona, lo que nos permite utilizar la palabra clave `await` dentro de la función para esperar a que una promesa se resuelva antes de continuar ejecutando el código.

En el contexto de este proyecto, al utilizar `async/await`, podemos esperar a que las funciones que devuelven promesas, como `agregarTarea()`, `completarTarea()` y `eliminarTarea()`, se resuelvan antes de ejecutar la siguiente línea de código. Esto nos permite escribir un flujo de ejecución más secuencial y comprensible.

2. **¿Qué sucedió al usar el método then()?**

Al utilizar el método `then()`, podemos encadenar las promesas y definir qué hacer cuando una promesa se resuelva o sea rechazada. Con `then()`, podemos pasar funciones de callback que se ejecutarán cuando la promesa se resuelva exitosamente, y también podemos manejar cualquier error que se produzca en la cadena de promesas utilizando el método `catch()`.

En el contexto de este proyecto, al utilizar el método `then()`, podemos encadenar las llamadas a las funciones que devuelven promesas, como `agregarTarea()`, `completarTarea()` y `eliminarTarea()`, y definir qué hacer después de que cada promesa se resuelva exitosamente. Esto nos permite estructurar la lógica de manejo de promesas de forma más flexible.

## Diferencias entre async/await y el método then()

Las principales diferencias entre `async/await` y el método `then()` son:

- **Sintaxis:** `async/await` proporciona una sintaxis más concisa y legible para escribir código asincrónico, ya que permite escribirlo de manera similar al código síncrono. En cambio, el método `then()` requiere pasar funciones de callback para manejar los resultados de las promesas.

- **Manejo de errores:** Con `async/await`, podemos utilizar el bloque `try/catch` para capturar y manejar errores de manera más fácil y familiar. En cambio, con el método `then()`, necesitamos usar el método `catch()` para capturar errores en la cadena de promesas.

- **Encadenamiento de promesas:** `async/await` permite encadenar promesas de manera más sencilla y legible, ya que podemos utilizar la palabra clave `await` para esperar a que una promesa se resuelva antes de continuar. En cambio, con el método `then()`, necesitamos encadenar las llamadas a `then()` para manejar cada promesa sucesiva.

En general, `async/await` suele ser más recomendado cuando se trabaja con código asincrónico en JavaScript, ya que proporciona una sintaxis más clara y una forma más fácil de manejar errores. Sin