# Búscador de Películas

## Enunciado

Crea una aplicación para buscar películas

API a usar: - <https://www.omdbapi.com/>
API_KEY: conseguila en el link de arriba

Requerimientos:

- Necesita mostrar un input para buscar la película y un botón para buscar.
- Lista las películas y muestra el título, año y poster.
- Que el formulario funcione
- Haz que las películas se muestren en un grid responsive.
- Hacer el fetching de datos a la API

Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automáticamente al escribir.
- Evita que se haga la búsqueda continuamente al escribir (debounce)

## Resolucion

Primero: tengo que armar el proyecto y configurarlo, se puede estilar un poco pero lo recomendado es usar framework para no perder mucho tiempo.

Segundo: investigar la api que nos dan, esto nos permite saber que queremos hacer.

URL peticion de datos: <http://www.omdbapi.com/?apikey=c9b60770>

>Usar '&' para agregar los parametros (Query params)

Parametro a usar:

- s: es requerido para buscar por peliculas por titulo, busca las peliculas que tengan las palabras asignadas en cualquier orden.
