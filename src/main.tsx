import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoadingScreen from './components/LoadingScreen.tsx'
import { initializeFonts } from './utils/fontLoader'

// Inicializar fuentes
initializeFonts();

// Optimización de rendimiento para diferir JS no crítico
const deferNonCriticalJS = () => {
  requestAnimationFrame(() => {
    // Análisis u otros scripts no críticos irían aquí
    console.log('JS no crítico cargado');
  });
};

// Componente raíz para gestionar el estado de carga
const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Precargar activos clave
    const preloadImages: string[] = [
      // Lista de tus imágenes críticas aquí
    ];

    Promise.all(
      preloadImages.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = resolve;
          })
      )
    ).then(() => {
      console.log('Imágenes críticas precargadas');
    });

    // Diferir JS no crítico
    deferNonCriticalJS();
  }, []);

  return (
    <StrictMode>
      <LoadingScreen 
        minimumTime={1500} 
        onComplete={() => setIsLoading(false)} 
      />
      {!isLoading && <App />}
    </StrictMode>
  );
};

// Esta es la manera recomendada de tener múltiples componentes en un archivo principal
const RootContainer = () => {
  return <Root />;
};

createRoot(document.getElementById('root')!).render(<RootContainer />);

export default RootContainer;