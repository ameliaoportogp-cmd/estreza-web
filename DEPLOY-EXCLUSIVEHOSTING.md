# Deploy en Exclusive Hosting

Este proyecto esta configurado con `output: "standalone"` para facilitar despliegues en hosting con Node.js.

## 1. Construir localmente

```bash
npm install
npm run build
```

## 2. Archivos que se deben subir al servidor

Desde la carpeta del proyecto:

- `.next/standalone/*`
- `.next/static`
- `public`

En el servidor, todo eso debe quedar dentro de la carpeta del subdominio, por ejemplo:

`~/www/web.destrezasv.com`

La estructura final debe verse asi:

```text
web.destrezasv.com/
  server.js
  .next/
    static/
  public/
  node_modules/
  package.json
```

## 3. Comandos utiles en el servidor

```bash
cd ~/www/web.destrezasv.com
node server.js
```

Si el panel Node.js pide un archivo de arranque, usar:

`server.js`

## 4. Actualizaciones futuras

1. Hacer cambios en local.
2. Ejecutar `npm run build`.
3. Volver a subir:
   - `.next/standalone/*`
   - `.next/static`
   - `public`
4. Reiniciar la instancia Node.js.
