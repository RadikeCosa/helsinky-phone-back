# Helsinky Phone Backend

Este es el backend para una aplicación de directorio telefónico, construido con Node.js y Express. Además de proporcionar una API REST para gestionar contactos, también sirve un frontend hecho en React desde la carpeta `dist`.

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=3001
   ```

## Uso

Para ejecutar el proyecto:

1. **Inicia el servidor**:

   ```bash
   npm start
   ```

2. **Accede a la aplicación**:
   - API: `http://localhost:3001/api/persons`
   - Frontend: `http://localhost:3001`

## Despliegue

Este backend está desplegado en Render y está accesible en:
[https://helsinky-phone-back.onrender.com](https://helsinky-phone-back.onrender.com)

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **React (Frontend en `dist/` servido como estático)**

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
