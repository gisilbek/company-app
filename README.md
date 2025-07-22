# Módulo de Empresas (NestJS + Angular + Firestore)

## Funcionalidades
- Crear una empresa con su usuario administrador simulado.
- Listar todas las empresas existentes.
- Sin login real, el usuario admin es predefinido.

## Tecnologías
- Backend: NestJS + Firebase Admin SDK
- Frontend: Angular
- Base de datos: Firestore

## Estructura de la base de datos
- `empresas`: colección con documentos { id, nombre }
- `usuarios`: colección con documentos { empresaId, email, rol }

## Cómo correr
1. Configura tu archivo `firebase/service-account.json`
2. Ejecuta el backend:
   ```bash
   npm install && npm run start
