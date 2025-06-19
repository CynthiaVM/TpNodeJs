# 🚀 Plantilla de Servidor con Capas – Express + Node.js


Plantilla base para iniciar proyectos con Node.js, estructurada por capas y equipada con **Express** y **Nodemon**. Ideal para comenzar rápido un backend organizado y escalable.

## ✨ Características

- ⚙️ **Express** para gestión de rutas y middleware.
- 🔄 **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- 🧱 Estructura modular por capas: controladores, servicios, rutas.
- 📦 Configuración mínima, lista para usar y extender.
---

## 📦 Instalación

### 1. Clonar el repositorio con `degit`

`degit` es una herramienta para clonar plantillas de manera limpia (sin el historial de Git).

#### 🔧Instalar `degit` (si no lo tienes instalado)

```bash
npm install -g degit
```

#### 📥Clonar el repositorio

```bash
degit DanielRiverol/template-express-layers carpeta-destino
```
📝Reemplaza `usuario/repo-nombre` por el nombre del repositorio y `carpeta-destino` por el nombre de la carpeta donde deseas clonar el proyecto.

### 2. Instalar dependencias

Una vez clonado el repositorio, entra en la carpeta 📁 del proyecto:

```bash
cd carpeta-destino
```

Luego, instala las dependencias:

```bash
npm install
```
cd "D:\Desarrollo Node"
degit DanielRiverol/template-express-layers TpNode
cd TpNode
npm install

---

## 🚀Comandos disponibles

### ▶️Iniciar el servidor

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```

### 🔄Actualizar dependencias (Opcional)

Para poder todas estas dependencias a su última versión, deberás instalar un paquete llamado `npm-check-updates` de forma global:

```bash
npm install -g npm-check-updates
```

Una vez instalado deberás correr el siguiente comando:

```bash
ncu -u
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

## 📁Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## 📝 Licencia

© 2025 Cynthia VM.  

Se permite copiar, modificar y usar este proyecto para fines personales o educativos, siempre que se reconozca la autoría original.

Queda prohibida la utilización de este proyecto con fines comerciales sin autorización previa.

Para consultas o permisos comerciales, contactarse a: cynthiamouzo@gmail.com
