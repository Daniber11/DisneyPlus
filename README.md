# DisneyPlus

Este proyecto es un emulación de Disney+ que permite a los usuarios ver contenido multimedia como videos. Incluye los siguientes componentes principales:

# Componentes

`Login`
El componente Login muestra una pantalla de inicio de sesión con un botón para contratar la oferta de Disney+ y suscribirse al servicio.
Implementa la lógica de validación de campos vacíos y caracteres permitidos para el campo de email. Permite a los usuarios iniciar sesión en la aplicación.

`ContentCategory`
El componente ContentCategory renderiza un contenedor que muestra una serie de categorías de contenido, cada una representada por una imagen y un video en bucle. Presenta todo el contenido relacionado a la categoría seleccionada desde el componente Home, mostrando el contenido por filas. Las categorías incluidas son Disney, Pixar, Marvel, Star Wars y National Geographic.

`ContentDetail`
El componente ContentDetail muestra los detalles de una película seleccionada, incluyendo una imagen de fondo, una imagen de título, controles de reproducción, un botón para ver el trailer, y una descripción de la película. Los detalles se obtienen de un archivo JSON que contiene información sobre las películas.

`Header`
El componente Header es la barra de navegación de la aplicación, que incluye el logo de Disney+, un botón para iniciar sesión, y enlaces a diferentes secciones de la aplicación como "Inicio", "Búsqueda", "Mi Lista", "Originales" y "Películas".

`Home`
El componente Home es la página principal de la aplicación, que muestra un slider de imágenes, categorías de contenido, recomendaciones, nuevas películas de Disney, tendencias y películas originales de Disney.

`ImgSlider`
El componente ImgSlider muestra un slider de imágenes con efecto de autoplay. Las imágenes son enlaces a páginas de detalle de películas.

`NewDisney`
El componente NewDisney muestra las nuevas películas de Disney+ con enlaces a las páginas de detalle de cada película.

`Originals`
El componente Originals muestra las películas originales de Disney+ con enlaces a las páginas de detalle de cada película.

`Recommends`
El componente Recommends muestra películas recomendadas para el usuario con enlaces a las páginas de detalle de cada película.

`Trending`
El componente Trending muestra las películas más populares en Disney+ con enlaces a las páginas de detalle de cada película.

`Configuración de Redux`
El archivo store.js configura Redux con los reducers combinados de movieSlice y userSlice, y define el middleware para el manejo del estado.

`Firebase`
El archivo firebase.js inicializa Firebase con la configuración necesaria para la autenticación de usuarios.

# Tecnologías Utilizadas

React JS
Redux
Firebase

# Estructura del Proyecto

El proyecto sigue una organización por funcionalidad, con carpetas separadas para los componentes, slices de Redux y otros archivos de configuración. Se utiliza Redux para manejar el estado de la aplicación.

# Datos de Prueba

Los datos de los usuarios y del contenido se almacenaron archivos tipo JSON.

# Getting Started with Create React App and Redux

### `npm install`

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra (http://localhost:3000) para verlo en su navegador.
