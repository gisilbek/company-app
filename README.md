---

# Proyecto de Gestión de Empresas

Este proyecto es una aplicación de gestión de empresas que consta de un **backend** desarrollado con **NestJS** y un **frontend** desarrollado con **Angular**. A continuación, encontrarás la estructura del proyecto, cómo instalarlo y cómo probarlo.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
company-management
├── company-management (NestJS)
│   ├── src
│   │   ├── app.module.ts          # Módulo principal de NestJS
│   │   ├── main.ts                # Punto de entrada del backend
│   │   ├── companies              # Módulo para empresas
│   │   │   ├── dto              # Módulo dto para empresas
│   │   │       └── create-company.dto.ts    # Módulo dto para crear empresas
│   │   │   ├── companies.controller.ts  # Controlador de empresas
│   │   │   ├── companies.service.ts     # Lógica de negocio para empresas
│   │   │   ├── companies.module.ts     # Módulo de empresas
│   │   │   ├── companies.service.spec.ts     # Módulo spec de empresas
│   │   └── firebase               # Configuración de Firebase
│   │       └── firebase.service.ts    # Servicio de Firebase
│   │       └── firebase.service.ts    # Servicio de Firebase
│   ├── package.json               # Dependencias y scripts del backend
│   └── tsconfig.json              # Configuración de TypeScript para el backend
├── company-app (Angular)
│   ├── src
│   │   ├── app
│   │   │   ├── company-create/ 
│   │   │   │  ├── company-create.component.css      # Componente para formulario de registro css empresas
│   │   │   │  ├── company-create.component.html      # Componente para formulario de registro html empresas
│   │   │   │  ├── company-create.component.ts      # Componente para crear empresas
│   │   │   │  ├── company-create.spec.ts     # Componente spec para crear empresas
│   │   │   ├── company-list/  
│   │   │   │  ├── company-list.component.css      # Componente para crear empresas
│   │   │   │  ├── company-list.component.html      # Componente para crear empresas
│   │   │   │  ├── company-list.component.ts      # Componente para crear empresas
│   │   │   │  ├── company.spec.ts      # Componente spec para crear empresas
│   │   │   ├── company.service.ts  # Servicio para interactuar con el backend
│   │   │   ├── app-routing.module.ts   # Rutas de la aplicación
│   │   │   ├── app.component.ts    # Componente raíz de Angular
│   │   │   ├── app.component.html    # Componente HTML raíz de Angular
│   │   │   ├── comapny.service.ts    # Componente raíz de Company
│   │   ├── angular.json            # Configuración del proyecto 
│   ├── package.json                # Dependencias y scripts del frontend
│   └── tsconfig.json               # Configuración de TypeScript para el frontend
└── README.md                       # Documentación del proyecto
```

---

## Requisitos

### Backend (NestJS)

* **Node.js** versión 14 o superior
* **NestJS** CLI para facilitar el desarrollo y ejecución del backend

### Frontend (Angular)

* **Node.js** versión 14 o superior
* **Angular CLI** para facilitar el desarrollo y ejecución del frontend

---

## Instalación

### 1. **Instalar el Backend (NestJS)**

#### a) **Clonar el repositorio del backend**

Si aún no lo has hecho, clona el repositorio del proyecto:

```bash
git clone https://github.com/gisilbek/company-management.git backend
cd backend
```

#### b) **Instalar las dependencias**

```bash
npm install
```

#### c) **Configurar el archivo de variables de entorno**

Si estás usando Firebase o alguna base de datos, asegúrate de configurar las variables de entorno necesarias en un archivo `.env` o directamente en Render/Heroku.

#### d) **Iniciar el backend**

Para iniciar el backend en modo de desarrollo, ejecuta:

```bash
npm run start:dev
```

El servidor backend estará corriendo en **`http://localhost:3000`** por defecto.

---

### 2. **Instalar el Frontend (Angular)**

#### a) **Clonar el repositorio del frontend**

Clona el repositorio del frontend:

```bash
git clone https://github.com/gisilbek/company-app.git frontend
cd frontend
```

#### b) **Instalar las dependencias**

```bash
npm install
```

#### c) **Configurar la URL del backend**

Asegúrate de que en tu servicio (`company.service.ts`) esté configurada correctamente la URL del backend (por ejemplo, `http://localhost:3000/companies`).

#### d) **Iniciar el frontend**

Para iniciar el frontend en modo de desarrollo, ejecuta:

```bash
ng serve
```

La aplicación frontend estará corriendo en **`http://localhost:4200`**.

---

## Pruebas

### Backend

1. **Test de creación de empresas (POST)**:

   * Envia una solicitud `POST` a `http://localhost:3000/companies/with-admin` con un cuerpo JSON como este:

   ```json
   {
    "company": {
    "name": "Bit Solutions",
    "description": "Empresa de software"
   },
   "admin": {
      "name": "Laura marcano",
      "email": "laura@bitsolutions.com",
      "password": "securepass123"
   }
   }
   ```

   * Esto debería devolver una respuesta indicando que la empresa fue creada correctamente.

2. **Test de obtención de empresas (GET)**:

   * Envia una solicitud `GET` a `http://localhost:3000/companies/with-admins`.
   * Deberías recibir un JSON con la lista de empresas.

### Frontend

1. **Probar creación de empresa**:

   * Accede a la ruta `/create` en tu navegador (`http://localhost:4200/create`).
   * Rellena el formulario y envíalo. Deberías ver un mensaje de éxito.

2. **Probar listado de empresas**:

   * Accede a la ruta `/` en tu navegador (`http://localhost:4200/`).
   * Deberías ver una lista de empresas que se obtiene desde el backend.

---


## Licencia
---

Este README proporciona la documentación básica del proyecto. Si necesitas más detalles o tienes preguntas adicionales, no dudes en preguntarme.

---
