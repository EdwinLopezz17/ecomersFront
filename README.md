ecommerce-app/
│
├── e2e/                            # Pruebas End-to-End
├── src/
│   ├── app/                        # Código principal de la aplicación
│   │   ├── core/                   # Servicios y funcionalidades comunes (singleton services)
│   │   │   ├── interceptors/       # Interceptores HTTP
│   │   │   ├── guards/             # Guards de rutas
│   │   │   ├── services/           # Servicios reutilizables en toda la app
│   │   │   ├── models/             # Modelos de datos compartidos (Interfaces, clases)
│   │   │   └── utils/              # Utilidades comunes (helpers, funciones)
│   │   ├── shared/                 # Componentes, directivas y pipes reutilizables
│   │   │   ├── components/         # Componentes UI compartidos (botones, formularios)
│   │   │   ├── directives/         # Directivas reutilizables
│   │   │   ├── pipes/              # Pipes reutilizables
│   │   ├── features/               # Módulos específicos por funcionalidades
│   │   │   ├── auth/               # Módulo de autenticación (login, register)
│   │   │   ├── products/           # Módulo de productos
│   │   │   │   ├── components/     # Componentes del módulo de productos
│   │   │   │   ├── services/       # Servicios específicos de productos
│   │   │   │   └── models/         # Modelos de datos específicos
│   │   │   ├── cart/               # Módulo del carrito de compras
│   │   │   ├── orders/             # Módulo de gestión de pedidos
│   │   │   └── user/               # Módulo de perfil y gestión de usuarios
│   │   ├── layouts/                # Plantillas y layouts generales (header, footer, sidebar)
│   │   ├── environments/           # Configuración de entornos (dev, prod)
│   │   ├── assets/                 # Recursos estáticos como imágenes, íconos, etc.
│   │   │   ├── images/             # Imágenes del proyecto
│   │   │   ├── icons/              # Íconos SVG o de otro tipo
│   │   └── styles/                 # Archivos SCSS/CSS globales
│   ├── assets/                     # Archivos públicos (favicon, manifest, etc.)
│   ├── environments/               # Configuraciones específicas del entorno
│   └── index.html                  # Punto de entrada HTML principal
├── angular.json                    # Configuración de Angular CLI
├── package.json                    # Dependencias y scripts del proyecto
└── tsconfig.json                   # Configuración de TypeScript
