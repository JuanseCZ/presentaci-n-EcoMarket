export const slideData = [
  {
    id: 'portada',
    title: 'EcoMarket Web App',
    subtitle: 'Propuesta Ejecutiva',
    content: 'Universidad Tecnológica de Chihuahua\n9N Desarrollo Web Integral\nMayo 2025',
    team: [
      'Luis Daniel Baylón Rubio',
      'Luis Santiago Armendariz',
      'Juan Sebastian Cardona Zuluaga',
      'José Eduardo Núñez Arenas',
      'Andrew Avila'
    ],
    type: 'cover'
  },
  {
    id: 'agenda',
    title: 'Agenda',
    items: [
      'Descripción del Proyecto',
      'Arquitectura y Framework',
      'Patrón de Diseño',
      'Metodología Ágil',
      'Componentes del Sistema',
      'Cronograma',
      'Prototipo Visual',
      'Conclusiones'
    ],
    type: 'list'
  },
  {
    id: 'descripcion',
    title: 'Descripción del Proyecto',
    subtitle: 'EcoMarket Web App',
    points: [
      'Plataforma de conexión entre productores locales y consumidores',
      'Enfoque en productos frescos, económicos y sustentables',
      'Solución a problemas de distribución en cadenas alimentarias locales',
      'Promoción de comercio justo y reducción de intermediarios'
    ],
    footer: 'Propósito: Crear un ecosistema digital sustentable para el comercio local de alimentos frescos',
    type: 'points'
  },
  {
    id: 'problema',
    title: 'El Problema',
    points: [
      'Desconexión entre productores locales y consumidores finales',
      'Exceso de intermediarios que elevan precios',
      'Dificultad para encontrar productos frescos y locales',
      'Desperdicio de alimentos por problemas logísticos'
    ],
    type: 'points'
  },
  {
    id: 'solucion',
    title: 'Nuestra Solución',
    subtitle: 'EcoMarket ofrece:',
    points: [
      'Conexión directa productor-consumidor',
      'Plataforma intuitiva y accesible',
      'Sistema de pedidos y entregas eficiente',
      'Transparencia en precios y origen de productos',
      'Reducción de huella ecológica'
    ],
    type: 'points'
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura Técnica',
    subtitle: 'Stack Tecnológico:',
    items: [
      'Frontend: React.js + Redux',
      'Backend: Node.js + Express',
      'Base de Datos: Firebase Firestore',
      'Autenticación: Firebase Auth',
      'Almacenamiento: Firebase Storage',
      'Hosting: Firebase Hosting'
    ],
    footer: 'Modelo de Despliegue: Single Page Application (SPA)',
    type: 'architecture'
  },
  {
    id: 'framework',
    title: 'Framework: React.js',
    subtitle: 'Características principales:',
    points: [
      'Componentes reutilizables - Mejora la organización y mantenimiento',
      'DOM Virtual - Aumenta la eficiencia y rendimiento',
      'Flujo de datos unidireccional - Reduce errores y facilita el debugging',
      'JSX - Mejora la legibilidad y productividad',
      'Amplio ecosistema - Extensiones y bibliotecas robustas',
      'Gran comunidad de soporte - Rápida resolución de problemas'
    ],
    type: 'points'
  },
  {
    id: 'react-ventajas',
    title: '¿Por qué React.js?',
    subtitle: 'Ventajas para nuestro proyecto:',
    points: [
      'Enfoque modular - Permite división eficiente del trabajo en equipo',
      'Curva de aprendizaje accesible - Equilibrio entre simplicidad y potencia',
      'Interfaces dinámicas - Ideal para actualizaciones en tiempo real',
      'Escalabilidad - Permite expansión futura',
      'Experiencia laboral relevante - Tecnología demandada en el mercado'
    ],
    type: 'points'
  },
  {
    id: 'mvc',
    title: 'Patrón de Diseño: MVC',
    subtitle: 'Modelo-Vista-Controlador adaptado a React',
    points: [
      'Modelo: Servicios de Firebase y lógica de negocio',
      'Vista: Componentes de React (UI)',
      'Controlador: Hooks personalizados y manejadores de eventos'
    ],
    footer: 'Beneficio: Separación clara de responsabilidades y modularidad',
    type: 'mvc'
  },
  {
    id: 'mvc-code',
    title: 'Implementación de MVC en React',
    code: `// Vista (Componente React)
const ProductList = () => {
  // Controlador (Hook y manejadores)
  const { products, loading, error } = useProducts();
  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  // Renderizado de la Vista
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

// Modelo (Servicio)
const useProducts = () => {
  // Lógica de acceso a datos...
};`,
    type: 'code'
  },
  {
    id: 'scrum',
    title: 'Metodología Ágil: SCRUM',
    subtitle: 'Características aplicadas al proyecto:',
    points: [
      'Sprints de 2 semanas - Desarrollo iterativo e incremental',
      'Daily Scrum - Reuniones diarias de 15 minutos',
      'Product Backlog - Lista priorizada de funcionalidades',
      'Sprint Review - Demostración al final de cada sprint',
      'Retrospectiva - Mejora continua del proceso'
    ],
    type: 'scrum'
  },
  {
    id: 'scrum-team',
    title: 'Aplicación de SCRUM en el equipo',
    subtitle: 'Roles y responsabilidades:',
    points: [
      'Product Owner rotativo - Priorización de backlog',
      'Scrum Master rotativo - Facilitación del proceso',
      'Equipo de desarrollo - Todos los miembros'
    ],
    subtitle2: 'Beneficios para entorno académico:',
    points2: [
      'Adaptación a horarios universitarios',
      'Comunicación constante',
      'Retroalimentación temprana',
      'Experiencia en diferentes roles'
    ],
    type: 'two-columns'
  },
  {
    id: 'componentes',
    title: 'Componentes del Sistema',
    subtitle: 'Módulos principales:',
    modules: [
      {
        title: 'Gestión de Usuarios',
        items: [
          'Registro y autenticación',
          'Perfiles (productor/consumidor)'
        ]
      },
      {
        title: 'Catálogo de Productos',
        items: [
          'Listado y búsqueda',
          'Filtros y categorías'
        ]
      },
      {
        title: 'Carrito de Compras',
        items: [
          'Gestión de productos',
          'Proceso de checkout'
        ]
      },
      {
        title: 'Panel de Administración',
        items: [
          'Gestión de inventario',
          'Reportes y estadísticas'
        ]
      }
    ],
    type: 'modules'
  },
  {
    id: 'flujo-consumidor',
    title: 'Flujo de Usuario: Consumidor',
    steps: [
      'Registro/Login',
      'Navegación por catálogo',
      'Búsqueda y filtrado',
      'Selección de productos',
      'Gestión de carrito',
      'Checkout y pago',
      'Seguimiento de pedido',
      'Calificación del servicio'
    ],
    type: 'flow'
  },
  {
    id: 'flujo-productor',
    title: 'Flujo de Usuario: Productor',
    steps: [
      'Registro/Login como productor',
      'Configuración de perfil',
      'Carga de productos',
      'Gestión de inventario',
      'Recepción de pedidos',
      'Preparación de entregas',
      'Seguimiento de ventas',
      'Reportes y análisis'
    ],
    type: 'flow'
  },
  {
    id: 'datos',
    title: 'Arquitectura de Datos',
    subtitle: 'Estructura de Firebase Firestore:',
    collections: [
      {
        name: 'users',
        description: 'Documentos de usuario (consumidor/productor)'
      },
      {
        name: 'products',
        description: 'Información de productos'
      },
      {
        name: 'orders',
        description: 'Pedidos y transacciones'
      },
      {
        name: 'reviews',
        description: 'Valoraciones y comentarios'
      }
    ],
    type: 'database'
  },
  {
    id: 'ui',
    title: 'Interfaz de Usuario',
    subtitle: 'Principios de diseño:',
    points: [
      'Simplicidad - Interfaz limpia y fácil de usar',
      'Accesibilidad - Compatible con lectores de pantalla',
      'Responsividad - Adaptable a todos los dispositivos',
      'Estética natural - Paleta de colores inspirada en alimentos frescos',
      'Experiencia de usuario intuitiva - Flujos claros y concisos'
    ],
    type: 'points'
  },
  {
    id: 'colores',
    title: 'Paleta de Colores',
    colors: [
      { name: 'Verde', hex: '#4CAF50', description: 'Frescura, naturaleza' },
      { name: 'Naranja', hex: '#FF9800', description: 'Energía, vitalidad' },
      { name: 'Blanco', hex: '#FFFFFF', description: 'Limpieza, pureza' },
      { name: 'Marrón tierra', hex: '#795548', description: 'Orgánico, sustentable' },
      { name: 'Gris claro', hex: '#F5F5F5', description: 'Espacios de respiro' }
    ],
    type: 'colors'
  },
  {
    id: 'mockups',
    title: 'Mockups Principales',
    subtitle: 'Páginas clave:',
    mockups: [
      'Landing Page',
      'Catálogo de productos',
      'Detalle de producto',
      'Carrito de compra',
      'Proceso de checkout',
      'Panel de productor'
    ],
    type: 'mockups'
  },
  {
    id: 'cronograma',
    title: 'Cronograma del Proyecto',
    subtitle: 'Planificación por sprints:',
    sprints: [
      { name: 'Sprint 1', duration: '2 semanas', tasks: 'Arquitectura base y autenticación' },
      { name: 'Sprint 2', duration: '2 semanas', tasks: 'Catálogo y gestión de productos' },
      { name: 'Sprint 3', duration: '2 semanas', tasks: 'Carrito y proceso de compra' },
      { name: 'Sprint 4', duration: '2 semanas', tasks: 'Panel de productor' },
      { name: 'Sprint 5', duration: '2 semanas', tasks: 'Integración y pruebas' }
    ],
    type: 'timeline'
  },
  {
    id: 'desafios',
    title: 'Desafíos Técnicos',
    challenges: [
      'Optimización de rendimiento con gran volumen de productos',
      'Sistema de geolocalización para entregas',
      'Procesamiento seguro de pagos',
      'Implementación de búsqueda avanzada',
      'Sincronización offline-online'
    ],
    type: 'challenges'
  },
  {
    id: 'metricas',
    title: 'Métricas de Éxito',
    metrics: [
      'Número de productores registrados',
      'Número de consumidores activos',
      'Volumen de transacciones',
      'Tiempo promedio de respuesta',
      'Calificaciones del servicio',
      'Tasa de retención de usuarios'
    ],
    type: 'metrics'
  },
  {
    id: 'oportunidades',
    title: 'Oportunidades Futuras',
    opportunities: [
      'Aplicación móvil nativa',
      'Sistema de suscripciones',
      'Integración con servicios de entrega',
      'Marketplace extendido',
      'Análisis avanzado de datos',
      'Expansión regional'
    ],
    type: 'opportunities'
  },
  {
    id: 'impacto',
    title: 'Impacto Social y Ambiental',
    impacts: [
      'Apoyo a la economía local',
      'Reducción de huella de carbono',
      'Promoción de consumo sostenible',
      'Disminución del desperdicio alimentario',
      'Educación sobre producción y consumo consciente'
    ],
    type: 'impact'
  },
  {
    id: 'conclusiones',
    title: 'Conclusiones',
    points: [
      'EcoMarket responde a necesidades reales del mercado',
      'Arquitectura moderna y escalable con React.js',
      'Metodología ágil para desarrollo eficiente',
      'Enfoque en experiencia de usuario intuitiva',
      'Potencial de impacto positivo en la comunidad'
    ],
    type: 'points'
  },
  {
    id: 'gracias',
    title: '¡Gracias!',
    subtitle: '¿Preguntas?',
    contact: {
      email: 'equipo@ecomarket.com',
      github: 'github.com/JuanseCZ/presentaci-n-EcoMarket',
      linkedin: 'linkedin.com/company/ecomarket'
    },
    type: 'thanks'
  }
];