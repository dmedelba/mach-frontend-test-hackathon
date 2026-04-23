# mach-frontend

Frontend Next.js + Tailwind CSS para MACH Race 2026.

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript

## Requisitos

- Node.js >= 20

## Instalación

```bash
npm install
```

## Uso

```bash
npm run dev    # desarrollo — puerto 3000
npm run build  # build de producción
npm start      # servidor de producción
npm test       # tests unitarios
```

Requiere que `mach-backend-test` esté corriendo en el puerto 3001.

## Docker

```bash
docker build -t mach-frontend .
docker run -p 3000:3000 mach-frontend
```

## Variables de entorno

| Variable              | Default                    | Descripción              |
|-----------------------|----------------------------|--------------------------|
| `BACKEND_URL`         | `http://localhost:3001`    | URL del backend (SSR)    |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000`    | URL de la API MACH       |

## Testing

El proyecto incluye tests unitarios con Vitest + Testing Library.

```bash
npm install
npm test
```

La integración continua corre `npm install`, `npm run lint` y `npm test` en GitHub Actions.
