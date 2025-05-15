/**
 * Funciones de utilidad de rendimiento para optimizar la carga y renderizado de páginas web
 */

// Cargar imágenes de manera diferida usando Intersection Observer
export const lazyLoadImages = (imageSelector = 'img[data-src]', rootMargin = '200px 0px') => {
  // Verificar si Intersection Observer es compatible
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, { rootMargin });

    // Observar todas las imágenes con atributo data-src
    document.querySelectorAll(imageSelector).forEach(img => {
      imageObserver.observe(img);
    });

    return imageObserver;
  } else {
    // Alternativa para navegadores que no soportan Intersection Observer
    const loadImages = () => {
      document.querySelectorAll(imageSelector).forEach(img => {
        const imgElement = img as HTMLImageElement;
        if (imgElement.dataset.src) {
          imgElement.src = imgElement.dataset.src;
          imgElement.removeAttribute('data-src');
        }
      });
    };

    // Cargar todas las imágenes inmediatamente
    loadImages();
    return null;
  }
};

// Función throttle para limitar la tasa de ejecución
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  
  return function(this: unknown, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// Función debounce para manejar eventos rápidos como resize o scroll
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: unknown, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
};

// Detectar si el dispositivo es un dispositivo móvil
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Detectar conexiones lentas y reducir animaciones/efectos
export const detectSlowConnection = (): boolean => {
  const connection = (navigator as Navigator & { 
    connection?: { 
      type?: string; 
      effectiveType?: string; 
      saveData?: boolean 
    }; 
    mozConnection?: { type?: string }; 
    webkitConnection?: { type?: string }
  }).connection || 
  (navigator as Navigator & { 
    connection?: { 
      type?: string; 
      effectiveType?: string; 
      saveData?: boolean 
    }; 
    mozConnection?: { type?: string }; 
    webkitConnection?: { type?: string }
  }).mozConnection || 
  (navigator as Navigator & { 
    connection?: { 
      type?: string; 
      effectiveType?: string; 
      saveData?: boolean 
    }; 
    mozConnection?: { type?: string }; 
    webkitConnection?: { type?: string }
  }).webkitConnection;
  
  if (connection) {
    // Usar una aserción de tipo para evitar errores
    const conn = connection as { 
      type?: string; 
      effectiveType?: string; 
      saveData?: boolean 
    };
    
    // Verificar tipo de conexión o tipo efectivo
    if (conn.type === 'cellular' || 
        conn.effectiveType === 'slow-2g' || 
        conn.effectiveType === '2g' || 
        conn.effectiveType === '3g' ||
        conn.saveData) {
      return true;
    }
  }
  
  return false;
};

// Agregar movimiento reducido para usuarios que lo prefieren
export const respectReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Función para optimizar animaciones basadas en el dispositivo y las preferencias
export const optimizeAnimations = (): { useReducedMotion: boolean, animationLevel: 'none' | 'minimal' | 'full' } => {
  const isMobile = isMobileDevice();
  const isSlowConnection = detectSlowConnection();
  const prefersReducedMotion = respectReducedMotion();
  
  // Determinar nivel de animación
  let animationLevel: 'none' | 'minimal' | 'full' = 'full';
  
  if (prefersReducedMotion) {
    animationLevel = 'none';
  } else if (isSlowConnection || isMobile) {
    animationLevel = 'minimal';
  }
  
  return {
    useReducedMotion: prefersReducedMotion,
    animationLevel
  };
};

export default {
  lazyLoadImages,
  throttle,
  debounce,
  isMobileDevice,
  detectSlowConnection,
  respectReducedMotion,
  optimizeAnimations
};