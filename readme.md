# Helsinky Phone Backend

Este es el backend para una aplicación de directorio telefónico, construido con Node.js y Express. Proporciona una API REST para gestionar contactos telefónicos de manera sencilla y eficiente.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

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
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta según tus necesidades):
   ```env
   PORT=3001
   # Agrega otras variables como credenciales de base de datos si aplica
   ```

## Uso

Para ejecutar el proyecto localmente:

1. **Inicia el servidor**:

   ```bash
   npm start
   ```

2. **Accede a la API**:
   Una vez que el servidor esté corriendo, puedes interactuar con la API en `http://localhost:3001/api/persons` (ajusta la ruta base según tu configuración).

## Endpoints de la API

A continuación, se detallan los endpoints disponibles:

- **GET /api/persons**: Obtiene la lista completa de contactos.  
  **Respuesta:**

  ```json
  [
    { "id": 1, "name": "Arto Hellas", "number": "040-123456" },
    { "id": 2, "name": "Ada Lovelace", "number": "39-44-5323523" }
  ]
  ```

- **GET /api/persons/:id**: Obtiene un contacto específico por su ID.

- **POST /api/persons**: Crea un nuevo contacto.  
  **Cuerpo de la solicitud:**

  ```json
  { "name": "Nuevo Contacto", "number": "123-456789" }
  ```

- **PUT /api/persons/:id**: Actualiza la información de un contacto existente.

- **DELETE /api/persons/:id**: Elimina un contacto por su ID.

_Nota: Ajusta los endpoints y ejemplos según la estructura real de tu API._

## Despliegue

Este backend está desplegado en Render y está accesible en:
[https://helsinky-phone-back.onrender.com](https://helsinky-phone-back.onrender.com)

Si tienes un frontend asociado, puedes mencionarlo aquí con su URL o enlace al repositorio.

## Contribución

¡Las contribuciones son bienvenidas! Sigue estos pasos para colaborar:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-feature
   ```
3. Haz commit de tus cambios:
   ```bash
   git commit -m 'Añadir nueva feature'
   ```
4. Sube tu rama:
   ```bash
   git push origin feature/nueva-feature
   ```
5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Tecnologías Utilizadas

- **Node.js**
- **Express**

_(Agrega aquí otras tecnologías como MongoDB, si las usas.)_

## Contacto

Si tienes preguntas o sugerencias, abre un issue en el repositorio o contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com).

---

### Personalización

- **Endpoints**: Reemplaza `/api/persons` con las rutas reales de tu API y actualiza los ejemplos de solicitud/respuesta según corresponda.
- **Variables de entorno**: Si tu proyecto usa una base de datos o servicios externos, añade las variables necesarias en la sección de instalación.
- **Frontend**: Si tienes un frontend, incluye un enlace o una breve descripción en la sección de "Despliegue".
- **Repositorio**: Cambia `https://github.com/tu-usuario/tu-repositorio.git` por la URL real de tu repositorio en GitHub.
