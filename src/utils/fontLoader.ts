// Este archivo ayuda a cargar fuentes web de manera consistente en tu aplicación
// Utiliza Web Font Loader, que proporciona más control que el estándar CSS @font-face

// Función para cargar fuentes desde Google Fonts
export const loadGoogleFonts = () => {
  // Crear un elemento script para cargar Web Font Loader
  const webFontScript = document.createElement('script');
  webFontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  webFontScript.async = true;

  // Una vez que el script se carga, inicializarlo con nuestra configuración de fuentes
  webFontScript.onload = () => {
    // @ts-expect-error - WebFont es añadido a window por el script
    window.WebFont.load({
      google: {
        // Cargar Inter para el texto del cuerpo y Poppins para encabezados
        families: ['Inter:400,500,600', 'Poppins:500,600,700', 'Roboto Mono:400,500']
      },
      // Manejar eventos
      loading: function() {
        console.log('Carga de fuentes iniciada');
      },
      active: function() {
        console.log('Fuentes cargadas correctamente');
        // Añadir una clase al body cuando las fuentes están activas
        document.body.classList.add('fonts-loaded');
      },
      inactive: function() {
        console.log('No se pudieron cargar las fuentes');
        // Aún así añadir la clase para permitir que la página se muestre con fuentes alternativas
        document.body.classList.add('fonts-loaded');
      }
    });
  };

  // Añadir el script al documento
  document.head.appendChild(webFontScript);
};

// Función para precargar fuentes críticas para un mejor rendimiento
export const preloadCriticalFonts = () => {
  const criticalFonts = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2', // Inter 400
    'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2', // Poppins 600
  ];

  criticalFonts.forEach(fontUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = fontUrl;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Exportar una función que maneja toda la carga de fuentes
export const initializeFonts = () => {
  // Precargar las fuentes más críticas primero
  preloadCriticalFonts();
  // Luego cargar todas las fuentes
  loadGoogleFonts();
};

export default initializeFonts;